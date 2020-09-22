timer = 0;
state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
  rectMode (CENTER);
}

function draw() {

  switch (state) {
    case 0:
      background("#ed1c2e");
      text("What do you call cheese that isn't yours?", 250, 250, 400, 400);
      //make timer count up 1 each loop
      //if timer is greater than 100 got to state 1
      timer++; //multiply is *
      if (timer > 5 * 60) {
        state = 1;
      }

      break;

    case 1:
      background("#ffd200");
      text("Nacho Cheese", 250, 250, 400, 400);
      break;


  }
}
