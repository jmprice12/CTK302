let myState = 0 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(24);

}

function draw() {

  switch(myState) {
    case 0:
      background("#2a8527");
      text("What do you call a fake noodle?", 250, 250);
      break ;

    case 1:
      background("#d7571d");
      text("An impasta", 250, 250);
      break;

  }
  fill("black");
  fill("white");
  rect(10, 10, 50, 25);

}

function mouseReleased() {

  if ((mouseX > 10) && (mouseX < 60) && (mouseY > 10) && (mouseY < 35))
    myState++;
  if (myState > 1) {
    myState = 0;
  }

}
