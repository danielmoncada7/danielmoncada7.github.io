// “Bouncing Ball” from p5.js
let x, y, dx, dy, r;

function setup() {
  const cnv = createCanvas(400, 400);
  cnv.parent('sketch-holder');
  // setting initial position and speed
  x = width / 2;
  y = height / 2;
  dx = 2;
  dy = 3;
  r = 20;
}

function draw() {
  background(220);
  fill(100, 150, 200);
  ellipse(x, y, r * 2);
  x += dx;
  y += dy;
  // bounce off walls
  if (x - r < 0 || x + r > width) dx *= -1;
  if (y - r < 0 || y + r > height) dy *= -1;
}
