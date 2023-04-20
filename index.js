
var index = [];

var playerX, playerY, playerHealth = 1000;

document.getElementById('status').innerHTML = "Health: " + playerHealth;


var monsterX = [], monsterY = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function collide(obj1,obj2) {

  var x = Number(obj1.style.left.replace("px",""));
  var y = Number(obj1.style.top.replace("px",""));
  var x2 = Number(obj2.style.left.replace("px",""));
  var y2 = Number(obj2.style.top.replace("px",""));


  if (x2 < 64 )  {



    x2 = 64;

    obj2.style.left = x2 + 'px';

    return 0;

}
if (x2 > window.innerWidth  - 64 )  {

    x2 = window.innerWidth - 64;

    obj2.style.left = x2 + 'px';

  return 0;

}
if (y2 < 64 )  {



  y2 = 64;

  obj2.style.top = y2 + 'px';

  return 0;


}
if (y2 > window.innerHeight  - 64 )  {

  y2 = window.innerHeight - 64;

  obj2.style.top = y2 + 'px';

  return 0;


}


    if (x < x2 + 64 && x > x2 - 64 ) 
      if (y < y2 + 64 && y > y2 - 64 ) 

        {


          x2 = x - 64;

          y2 = y - 64;

          obj2.style.left = x2 + 'px';
          obj2.style.top = y2 + 'px';

            return 1;
                    

        }

        return -1;
   

}




function main() {


background("black");


  player(250,250);


  for ( var x = 0; x < window.innerWidth; x += 128 ) {

    for ( var y = 0; y < window.innerHeight; y += 128 ) {
  
    var chance = getRandomInt(1000);
  
    if ( chance < 100 ) {
  
          monsterX.push(x);
          monsterY.push(y);
  
      monster(x,y);
  
    }
  
  
  
  
  }
  
  
  }




}

setInterval(function() {


  for ( var m1 = 1; m1 < index.length; m1++ ) {

    var dirx =   getRandomInt(1000);
    var diry =   getRandomInt(1000);

    x = 0;
    y = 0;

    if ( dirx < 250 )

      x = 64;
      if ( dirx > 250 && dirx < 500 )

      x = -64;
      if ( diry > 500 & diry < 750 )

      y = 64;

      if ( diry > 750  && diry < 1000 )

      y = -64;
      

    move(m1,x,y);

  }


},100);

function move(i,x,y) {


  

  for ( var m1 = 1; m1 < index.length; m1++ ) {


     collide(index[i],index[m1]);



    }


    if ( collide(index[i],index[0]) == 1 )

      {

          playerHealth -= 50;

          if ( playerHealth < 0 ) {


              playerHealth = 0;

                  document.getElementById('status').innerHTML = "Game Over. Refresh the Page to play again.";

          }

      }


    monsterX[i] += (x);
    monsterY[i] += (y);

    index[i].style.top = monsterY[i] + "px";
    index[i].style.left = monsterX[i] + "px";




}


window.onkeydown = function(e) {


  if ( e.keyCode == 37 ) {

    playerX -= 64;

    if ( playerX < 64 || playerX > window.innerWidth - 64 )

    return


    index[0].style.left = playerX + "px";

}

if ( e.keyCode == 39 ) {

  playerX += 64;

  if ( playerX < 64 || playerX > window.innerWidth  - 64 )

      return


  index[0].style.left = playerX + "px";

}

if ( e.keyCode == 38 ) {

  playerY -= 64;

  if ( playerY < 64 || playerY > window.innerHeight - 64 )

      return


  index[0].style.top = playerY + "px";



}

if ( e.keyCode == 40 ) {

  playerY += 64;

  if ( playerY < 64 || playerY > window.innerHeight  - 64)

      return

  index[0].style.top = playerY + "px";

}



}

 


    
    setInterval(main(),100);

    

function background(color) {

  document.body.style.backgroundColor = color;

}

function player(x,y) {

  var div = document.createElement('div');

  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.width = 64 + "px";
  div.style.height = 64 + "px";
  div.style.backgroundColor = "green";
  div.id = "player";

  playerX = x;
  playerY = y;

  document.body.appendChild(div);

  index.push(div);

  return div;

}

function npc(x,y) {

  var div = document.createElement('div');

  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.width = 64 + "px";
  div.style.height = 64 + "px";
  div.style.backgroundColor = "bisque";
  div.id = "npc";

  document.body.appendChild(div);

  index.push(div);

  return div;

}

function monster(x,y) {

  var div = document.createElement('div');

  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.width = 64 + "px";
  div.style.height = 64 + "px";
  div.style.backgroundColor = "red";
  div.id = "monster";

  document.body.appendChild(div);

  index.push(div);

  return div;

}

function tile(x,y) {

  var div = document.createElement('div');

  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.width = 64 + "px";
  div.style.height = 64 + "px";
  div.style.backgroundColor = "maroon";
  div.id = "tile";

  document.body.appendChild(div);

  index.push(div);

  return div;

}

function quest(x,y,text) {

  var div = document.createElement('div');

  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.width = 64 + "px";
  div.style.height = 64 + "px";
  div.style.backgroundColor = "white";
  div.id = "quest";
  div.innerHTML = text;

  document.body.appendChild(div);

  index.push(div);

  return div;

}

function spell(x,y,text,spellfunc) {

  var div = document.createElement('div');

  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.width = 64 + "px";
  div.style.height = 64 + "px";
  div.style.backgroundColor = "purple";
  div.id = "spell";
  div.innerHTML = text;

  div.onclick = spellfunc;

  document.body.appendChild(div);

  index.push(div);

  return div;

}






