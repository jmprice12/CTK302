let names;

function setup() {
  createCanvas(500, 500);
  textAlign("Center");
  names = ["jenny", "tim'", "ollie"];
}

function draw() {

}

function mouseReleased() {
  stroke(random(10, 50), 0, 0);
  strokeWeight(random(10, 50));
  fill(random(200, 252), 0, 0);
  ellipse(mouseX, mouseY, random(100, 150));
  noStroke();
  fill(0);
  text(random(names), mouseX, mouseY, random(100, 150));
}
