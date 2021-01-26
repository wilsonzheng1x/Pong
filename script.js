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
