// Import stylesheets
import './style.css';

var index = [];

function background(color) {

  document.body.style.backgroundColor = color;

}

function player(x,y,name) {

  var div = document.createElement('div');

  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.width = 64 + "px";
  div.style.height = 64 + "px";
  div.style.backgroundColor = "green";
  div.id = "player_" + name;

  document.body.appendChild(div);

}

function monster(x,y,name) {

  var div = document.createElement('div');

  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.width = 64 + "px";
  div.style.height = 64 + "px";
  div.style.backgroundColor = "red";
  div.id = "monster_" + name;

  document.body.appendChild(div);

}

function tile(x,y,name,c) {

  var div = document.createElement('div');

  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.width = 64 + "px";
  div.style.height = 64 + "px";
  div.style.backgroundColor = c;
  div.id = "tile_" + name;

  document.body.appendChild(div);


}

function quest(x,y,name,text) {

  var div = document.createElement('div');

  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.width = 64 + "px";
  div.style.height = 64 + "px";
  div.style.backgroundColor = "white";
  div.id = "quest_" + name;
  div.innerHTML = text;

  document.body.appendChild(div);

}


