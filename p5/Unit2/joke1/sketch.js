let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(24);
  rectMode (CENTER);
}

function draw() {

  switch (state) {
    case 0:
      background("#9EE7F5");
      text("Can February March?", 250, 250,400,400);
      break;


    case 1:
      background("#F3A8BC");
      text("No, but April May", 250, 250,400,400);
      break;
  }

}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }

}
