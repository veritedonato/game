// Import stylesheets
import './style.css';

var index = [];

var playerX, playerY;

function main() {

  background("black");


  player(250,250);

}


window.onkeydown = function(e) {


  if ( e.keyChar == "w" || e.keyChar == "W" ) {

    playerY -= 10;  
    
    player(playerX,playerY);

  }

  if ( e.keyChar == "s" || e.keyChar == "S" ) {


  }


  if ( e.keyChar == "a" || e.keyChar == "A" ) {


  }


  if ( e.keyChar == "d" || e.keyChar == "D" ) {


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

}

function tile(x,y,c) {

  var div = document.createElement('div');

  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.width = 64 + "px";
  div.style.height = 64 + "px";
  div.style.backgroundColor = c;
  div.id = "tile";

  document.body.appendChild(div);

  index.push(div);

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

}






