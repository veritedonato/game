// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

var objIndex = [];

function background(color) {

  appDiv.style.backgroundColor = color;

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function object (name) {

  for ( var i = 0; i < 10; i++ ) {

    var r = perlin.get(getRandomInt(256),getRandomInt(256)).toString(16);
    var g = perlin.get(getRandomInt(256),getRandomInt(256)).toString(16);
    var b = perlin.get(getRandomInt(256),getRandomInt(256)).toString(16);
    var x = perlin.get(getRandomInt(window.innerWidth),getRandomInt(window.innerHeight));
    var y = perlin.get(getRandomInt(window.innerWidth),getRandomInt(window.innerHeight));

    var color = "#" + r + g  + b;

    var div = document.createElement(name + i);

    div.style.position = "absolute";
    div.style.left = x;
    div.style.top = y;
    div.style.backgroundColor = color;
    div.style.width = 64;
    div.style.height = 64;

    objIndex.push(div);

  }
  

}

background("lightgreen");

object("player");

