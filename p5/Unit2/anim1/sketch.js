var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#4a536b")
  noStroke();
  fill("#ff9a8d")
  rect(x,400, 50,30);
  ellipse(x,50,50,50);
  text('cat', x, 250);
  textSize(24);
  x = x + 2;
  if (x > width) {
    x = 0;
  }

}
