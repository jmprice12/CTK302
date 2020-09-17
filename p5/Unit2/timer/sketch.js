timer = 0;
state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {
    case 0:
      background("#3caea3");
      //make timer count up 1 each loop
      //if timer is greater than 100 got to state 1
      timer++; //multiply is *
      if (timer > 5*60) {
        state = 1;
      }

      break;

    case 1:
      background("#f6d55c");
      break;


  }
}
