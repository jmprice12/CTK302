var x = 0;

function setup() {
  createCanvas(1200, 400);
}

function draw() {
  background("#2F3042");
  noStroke();
  push();
  translate(x, 0);
  avatar();
  x = x + 1;
  pop();
  if (x > width) {
    x = 0;
  }

}
