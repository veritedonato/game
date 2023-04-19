// Import stylesheets
import './style.css';

var index = [];

var playerX, playerY;

var monsterX = [], monsterY = [];

var tileX = [], tileY = [];

var questX = [], questY = [];

var npcX = [], npcY = [];

var spellX = [], spellY = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function collideWorldBounds(x,y) {

  if (x < 0 || x > window.innerWidth )  {

    return true;

  }

  if (y < 0 || y > window.innerHeight )  {

    return true;

  }

  return false;


}

function collide(obj1,obj2) {


    if (obj1.style.left < obj2.style.left + 10 && obj1.style.left > obj2.style.left - 10 ) 
      if (obj1.style.top < obj2.style.top + 10 && obj1.style.top > obj2.style.top - 10 ) 

        return true;

   
  return false;

}

function main() {

  background("black");


  player(250,250);

  var m = [];

   for ( var i = 0; i < 10; i++ ) {

      monsterX.push(getRandomInt(window.innerWidth));
      monsterY.push(getRandomInt(window.innerHeight));

      m.push(monster(monsterX,monsterY));


  }

  for ( var i = 0; i < m.length; i++ )

      {


        if (collideWorldBounds(m[i].style.left,m[i].style.top))

        {


          if ( m[i].style.left < 0 )

              {

                  monsterX[i] += 64;

                  m[i].style.left = monsterX[i] + "px";

              }

          if ( m[i].style.left > window.innerWidth ) {

            monsterX[i] -= 64;

            m[i].style.left = monsterX[i] + "px";


          }

          if ( m[i].style.top > window.innerHeight )

            {

              monsterY[i] -= 64;

              m[i].style.top = monsterY[i] + "px";


            }

            if ( m[i].style.top < 0 )

            {

              monsterY[i] += 64;

              m[i].style.top = monsterY[i] + "px";


            }



        }

          for ( var j = 0 ; j < m.length; j++ )


          if (collideWorldBounds(m[j].style.left, m[j].style.top))

          {
  
  
            if ( m[j].style.left < 0 )
  
                {
  
                    monsterX[j] += 64;
  
                    m[j].style.left = monsterX[j] + "px";
  
                }
  
            if ( m[j].style.left > window.innerWidth ) {
  
              monsterX[j] -= 64;
  
              m[j].style.left = monsterX[j] + "px";
  
  
            }
  
            if ( m[j].style.top > window.innerHeight )
  
              {
  
                monsterY[j] -= 64;
  
                m[j].style.top = monsterY[j] + "px";
  
  
              }
  
              if ( m[j].style.top < 0 )
  
              {
  
                monsterY[j] += 64;
  
                m[j].style.top = monsterY[j] + "px";
  
  
              }
  
  
  
          }
  

          if (collide(m[i],m[j]))

          {

            monsterX[i] -= 64;
            monsterY[i] -= 64;


                m[i].style.left = monsterX[i] + "px";
                m[i].style.top = monsterY[i] + "px";

                monsterX[i] += 64;
                monsterY[i] += 64;
    
    
                    m[j].style.left = monsterX[i] + "px";
                    m[j].style.top = monsterY[i] + "px";
    


          }


      }

}


window.onkeydown = function(e) {


  if ( e.keyCode == 37 ) {

    playerX -= 10;

    if ( playerX < 0 || playerX > window.innerWidth )

    return


    index[0].style.left = playerX + "px";

}

if ( e.keyCode == 39 ) {

  playerX += 10;

  if ( playerX < 0 || playerX > window.innerWidth )

      return


  index[0].style.left = playerX + "px";

}

if ( e.keyCode == 38 ) {

  playerY -= 10;

  if ( playerY < 0 || playerY > window.innerHeight )

      return


  index[0].style.top = playerY + "px";



}

if ( e.keyCode == 40 ) {

  playerY += 10;

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

  playerX = x;
  playerY = y;

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






