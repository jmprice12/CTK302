let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(24);
  textAlign(CENTER);
}

function draw() {

  switch (state) { //needs nested  curly brackets


    case 0:
      background("#ffdd00");
      text("case 0", 250, 250);
      break;

    case 1:
      background("#1bc4e2");
      text("case 1", 250, 250);
      break;

    case 2:
      background("#b094ca");
      text("case 2", 250, 250);
      break;


  }

}

function mouseReleased(){
  state++; // state= state+1
  if (state > 2) {
    state = 0;
  }
}
