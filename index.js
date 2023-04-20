
import './style.css';

var index = [];

var tiles = [];

var playerX, playerY, playerHealth = 1000;

var questTarget = null;

var monsterX = [], monsterY = [];
var tileX = [], tileY = [];
var npcX = [], npcY = [];
var tileX = [], tileY = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function collide(obj1,obj2) {

  var x = obj1.style.left.replace("px","");
  var y = obj1.style.top.replace("px","");
  var x2 = obj2.style.left.replace("px","");
  var y2 = obj2.style.top.replace("px","");


  if (x2 < 64 )  {



    x2 = 128;

    obj2.style.left = x2 + 'px';

    return 0;

}
if (x2 > window.innerWidth  - 64 )  {

    x2 = window.innerWidth - 128;

    obj2.style.left = x2 + 'px';

  return 0;

}
if (y2 < 64 )  {



  y2 = 128;

  obj2.style.top = y2 + 'px';

  return 0;


}
if (y2 > window.innerHeight  - 64 )  {

  y2 = window.innerHeight - 128;

  obj2.style.top = y2 + 'px';

  return 0;


}


    if (x < x2 + 64 && x > x2 - 64 ) 
      if (y < y2 + 64 && y > y2 - 64 ) 

        {


            return 1;
                    

        }

        return -1;
   

}




function main() {


background("black");


  player(256,256);

  for ( var i = 0; i < 5; i++ ) {

    var x = getRandomInt(window.innerWidth);
    var y = getRandomInt(window.innerHeight);
  
    monsterX.push(x);
    monsterY.push(y);
  
  monster(x,y);
  
    }

    for ( var i = 0; i < 5; i++ ) {

      var x = getRandomInt(window.innerWidth);
      var y = getRandomInt(window.innerHeight);
    
      npcX.push(x);
      npcY.push(y);
    
    npc(x,y);
    
      }     

    
    

}

var a = 0, b = 0;

setInterval(function() {

  var chance = getRandomInt(1000);

  if ( chance < 100 ) {

      tile(a,b);

      tileX.push(a);
      tileY.push(b);


  }

  a += 64;

  if ( a > window.innerWidth )

    {

        a = 0;

        b += 64;


        if ( b > window.innerHeight )

            clearInterval(this);

    }

},1);


document.getElementById('status').innerHTML = "Health: " + playerHealth;




setInterval(function() {


  for ( var m1 = 1; m1 < index.length; m1++ ) {

    var dirx =   getRandomInt(1000);
    var diry =   getRandomInt(1000);

    var x = 0;
    var y = 0;

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

setInterval(function() {

  for ( var m1 = 1; m1 < index.length; m1++ ) {


    if ( collide(index[0],index[m1]) == 1 && index[m1].id == "monster" )

    {
  
        playerHealth -= 10;
  
        document.getElementById('status').innerHTML = "Health: " + playerHealth;
  
        if ( playerHealth < 0 ) {
  
  
            playerHealth = 0;
  
                document.getElementById('status').innerHTML = "Game Over. Refresh the Page to play again.";
  
        }
  
    }

    if ( collide(index[0],index[m1]) == 1 && index[m1].id == "npc" )

    {


      document.getElementById('status').innerHTML = "I have a quest for you!";

      
      var x = getRandomInt(window.innerWidth);
      var y = getRandomInt(window.innerHeight);

      if ( questTarget )

        document.body.removeChild(questTarget);


        questTarget = quest(x,y);

        

  
    }

    if ( collide(index[0],index[m1]) == 1 && index[m1].id == "tile" )

    {

      var m1x = index[0].style.left.replace('px','');
      var m1y = index[0].style.top.replace('px','');

      if ( tileX[m1] < m1x + 64 ) {

        tileX[m1] = m1x  + 128;

        if ( tileX[m1] > m1x  - 64 )

        tileX[m1] = m1x   - 64;

      }

      if ( tileY[m1] < m1y + 64 ) {

        tileY[m1] = m1y + 128 ;

        if ( tileY[m1] > m1y  - 64 )

        tileY[m1] = m1y   - 64 ;

      }


      index[0].style.left = tileX[m1] + "px";
      index[0].style.top = tileY[m1] + "px";

  
    }
    
}

},250);

function move(i,x,y) {


  

  for ( var m1 = 1; m1 < index.length; m1++ ) {


     collide(index[i],index[m1]);



    }




    monsterX[i] += (x);
    monsterY[i] += (y);

    index[i].style.top = monsterY[i] + "px";
    index[i].style.left = monsterX[i] + "px";




}


window.onkeydown = function(e) {

  if ( playerHealth == 0 )

      return;


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
  div.style.backgroundColor = "yellow";
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
  div.style.backgroundColor = "grey";
  div.id = "tile";

  document.body.appendChild(div);

  index.push(div);

  return div;

}

function quest(x,y) {

  var div = document.createElement('div');

  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.width = 64 + "px";
  div.style.height = 64 + "px";
  div.style.backgroundColor = "white";
  div.id = "quest";

  index.push(div);

  document.body.appendChild(div);

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






