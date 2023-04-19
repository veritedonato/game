
var index = [];

var playerX, playerY;

var monsterX = [], monsterY = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function collide(obj1,obj2) {


  if (obj1.style.left < 0 || obj1.style.left > window.innerWidth )  {

    return true;

  }

  if (obj1.style.top < 0 || obj1.style.top > window.innerHeight )  {

    return true;

  }
  if (obj2.style.left < 0 || obj2.style.left > window.innerWidth )  {

    return true;

  }

  if (obj2.style.top < 0 || obj2.style.top > window.innerHeight )  {

    return true;

  }


    if (obj1.style.left < obj2.style.left + 64 && obj1.style.left > obj2.style.left - 64 ) 
      if (obj1.style.top < obj2.style.top + 64 && obj1.style.top > obj2.style.top - 64 ) 

        return true;

   
  return false;

}

function main() {

  background("black");


  player(250,250);




      for ( var x = 0; x < window.innerWidth; x += 64 ) {

          for ( var y = 0; y < window.innerHeight; y += 64 ) {

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


  for ( var m = 1; m < index.length; m++ ) {

    var x =   getRandomInt(64);
    var y =   getRandomInt(64);

    move(m,x,y);

  }


},100);

function move(i,x,y) {

  monsterX[i] += x;
  monsterY[i] += y;

  if ( monsterY[i] < 0 || monsterY[i] > window.innerHeight )

      return
  if ( monsterX[i] < 0 || monsterX[i] > window.innerWidth )

      return


      index[i].style.top = monsterY[i] + "px";
      index[i].style.left = monsterX[i] + "px";


}


window.onkeydown = function(e) {


  if ( e.keyCode == 37 ) {

    playerX -= 64;

    if ( playerX < 0 || playerX > window.innerWidth )

    return


    index[0].style.left = playerX + "px";

}

if ( e.keyCode == 39 ) {

  playerX += 64;

  if ( playerX < 0 || playerX > window.innerWidth )

      return


  index[0].style.left = playerX + "px";

}

if ( e.keyCode == 38 ) {

  playerY -= 64;

  if ( playerY < 0 || playerY > window.innerHeight )

      return


  index[0].style.top = playerY + "px";



}

if ( e.keyCode == 40 ) {

  playerY += 64;

  if ( playerY < 0 || playerY > window.innerHeight )

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






