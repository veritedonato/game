// Import stylesheets
import './style.css';

'use strict';
let perlin = {
    rand_vect: function(){
        let theta = Math.random() * 2 * Math.PI;
        return {x: Math.cos(theta), y: Math.sin(theta)};
    },
    dot_prod_grid: function(x, y, vx, vy){
        let g_vect;
        let d_vect = {x: x - vx, y: y - vy};
        if (this.gradients[[vx,vy]]){
            g_vect = this.gradients[[vx,vy]];
        } else {
            g_vect = this.rand_vect();
            this.gradients[[vx, vy]] = g_vect;
        }
        return d_vect.x * g_vect.x + d_vect.y * g_vect.y;
    },
    smootherstep: function(x){
        return 6*x**5 - 15*x**4 + 10*x**3;
    },
    interp: function(x, a, b){
        return a + this.smootherstep(x) * (b-a);
    },
    seed: function(){
        this.gradients = {};
        this.memory = {};
    },
    get: function(x, y) {
        if (this.memory.hasOwnProperty([x,y]))
            return this.memory[[x,y]];
        let xf = Math.floor(x);
        let yf = Math.floor(y);
        //interpolate
        let tl = this.dot_prod_grid(x, y, xf,   yf);
        let tr = this.dot_prod_grid(x, y, xf+1, yf);
        let bl = this.dot_prod_grid(x, y, xf,   yf+1);
        let br = this.dot_prod_grid(x, y, xf+1, yf+1);
        let xt = this.interp(x-xf, tl, tr);
        let xb = this.interp(x-xf, bl, br);
        let v = this.interp(y-yf, xt, xb);
        this.memory[[x,y]] = v;
        return v;
    }
}
perlin.seed();

var objIndex = [];

function background(color) {

  document.body.style.backgroundColor = color;

}

function getRandomInt(max) {
  return Math.random() * max;
}

function object (a,b) {

var x = 0, y = 0;

while(1) {

    var c = Math.floor((Math.abs(perlin.get(getRandomInt(256),getRandomInt(256))*256)*100000)).toString(16);

    var color = "#" + c;

    console.log(color);

    console.log(a + x);
    console.log(b + y);

    var div = document.createElement("div");

    div.style.position = "absolute";
    div.style.left = a + x;
    div.style.top = b + y;
    div.style.backgroundColor = color;
    div.style.width = 64;
    div.style.height = 64;

    document.body.appendChild(div);

    objIndex.push(div);

    x += 8;

    if ( x >= 64 )

    {

        x = 0;

        y += 8;

        if ( y >= 64 )

            break;

    }

  }
  

}


background("lightgreen");

object(250,250);
