var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };
  
  
var canvas = document.createElement("canvas");
var height = 400;
var width = 600;
canvas.height = 400;
canvas.width = 600;
var context = canvas.getContext('2d');

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

var step = function() {
  update();
  render();
  animate(step);
};

var update = function() {
};

var render = function() {
  context.fillStyle = "powderblue";
  context.fillRect(0, 0, width, height);
};

function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 0;
  this.y_speed = 0;
};

Paddle.prototype.render = function() {
 context.fillStyle = "red";
 context.fillRect(this.x, this.y, this.width, this.height);
}

function Player() {
   this.paddle = new Paddle(175, 580, 50, 10);
}

function Computer() {
  this.paddle = new Paddle(175, 10, 50, 10);
}

Player.prototype.render = function() {
  this.paddle.render();
};

Computer.prototype.render = function() {
  this.paddle.render();
};
