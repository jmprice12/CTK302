let cars = [];
let f1, f2, f3;
let frogPos;
let state = 0;
let maxCars = 5;
let timer = 0;

function setup() {
  createCanvas(600, 600);
  f1 = loadFont("assets/lm.otf");
  f2 = loadFont("assets/ds.otf");
  f3 = loadFont("assets/rd.TTF");
  frogPos = createVector(width / 2, height - 80, );
  // Spawn 20 objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car()); // makes 1 car
  }
}

function draw() {
  switch (state) {
    case 0:
      background(200);
      text("welcome to my game", width / 2, height / 2);
      //image/splash screen
      //text
      break;

    case 1:

      game();
      timer++;
      if (timer > 10 * 60) {
        state = 3;
      }
      break;

    case 2:
      background("255");
      text("you win", width / 2, height / 2);
      break;

    case 3:
      background("200");
      text("you lost", width / 2, height / 2);
      break;
  }



}

function game() {
  background(100);



  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move(); // moves 1 car
    //chect to see if it is close to frog
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1); //i,1 takes out only 1
    }

  }
  if (cars.length == 0) {
    state = 2; //they won
  }

  // draw the frog
  fill("green");
  ellipse(frogPos.x, frogPos.y, 50, 50);

  checkForKeys();
}

function resetTheGame() {
  cars = [];
  timer = 0;
  //respon cars
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car()); // makes 1 car
  }

}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 1: // they cant click out of game
      break;

    case 2: // the win state
      resetTheGame();
      state = 0; // go to meu screne
      break;

    case 3: //lose state
      resetTheGame();
      state = 0;
      break;
  }
  //if (state == 0) state = 1;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y -= 5;
  if (keyIsDown(UP_ARROW)) frogPos.y += 5;

}






// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    //x coordinates  //y coordinates
    this.vel = createVector(random(-6, 6), random(-6, 6));
    this.size = random(39, 80);
    this.c = random(255);
    this.font = floor(random(3));


  }

  // methods

  display() {
    // 50 wide 25 tall
    //rect(this.pos.x, this.pos.y, 50, 25);
    textSize(this.size);
    fill(this.c);

    switch (this.font) {
      case 0:
        textFont(f1);
        break;

      case 1:
        textFont(f2);
        break;

      case 2:
        textFont(f3);
        break;
    }


    text("I Voted", this.pos.x, this.pos.y);


  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
