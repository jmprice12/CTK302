let cars = [];
var img1, img2, img3, img4, img5, img6, img7, img8;
let frogPos;
let state = 0;
let maxCars = 3;
let timer = 0;
let song1;
let song2;

function preload() {
  song1 = loadSound("assets/win.mp3");
  song2 = loadSound("assets/loose.mp3");
}


function setup() {
  createCanvas(600, 600);
  img1 = loadImage("assets/State0.png");
  img2 = loadImage("assets/n2.png");
  img3 = loadImage("assets/State2.png");
  img4 = loadImage("assets/State3.png");
  img5 = loadImage("assets/o.png");
  img6 = loadImage("assets/p.png");
  img7 = loadImage("assets/t.png");
  img8 = loadImage("assets/y.png");
  imageMode(CENTER);

  frogPos = createVector(width / 2, height - 80, );
  // Spawn 20 objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car()); // makes 1 car
  }

}

function draw() {

  switch (state) { //needs nested  curly brackets


    case 0:
      image(img1, width / 2, height / 2, 600, 600);
      //text("case 0", 250, 250);
      text("Using the arrow keys stuff the shepherd before time runs out! Click to start ", CENTER, height / 2 + 200);
      state = 0;
      song1.pause();
      song2.pause();
      break;



    case 1:
      image(img2, width / 2, height / 2, 600, 600);
      song1.pause();
      song2.pause();
      game();
      timer++;
      if (timer > 10 * 70) {
        state = 3;
      }

      break;

    case 2:
      image(img3, width / 2, height / 2, 600, 600);
      //background("255");
      //text("you win", width / 2, height / 2);
      //https://www.youtube.com/watch?v=40Me1-yAtTc
      if (!song1.isPlaying()) {
        song1.play();
      }
        break;

      case 3:
          image(img4, width / 2, height / 2, 600, 600);
        //https://www.youtube.com/watch?v=40Me1-yAtTc
        if (!song2.isPlaying()) {
          song2.play();
        }
        //text("you lost", width / 2, height / 2);
        break;


      }

  }

  function game() {
    image(img2, width / 2, height / 2, 600, 600);
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

    image(img5, frogPos.x, frogPos.y, 132, 200);

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

      case 2:
        // the win state
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
    if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
    if (keyIsDown(UP_ARROW)) frogPos.y -= 5;

  }






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
          image(img6, this.pos.x, this.pos.y, 92, 57);
          break;

        case 1:
          image(img7, this.pos.x, this.pos.y, 92, 57);
          break;

        case 2:
          image(img8, this.pos.x, this.pos.y, 92, 57);
          break;
      }
      //text("I Voted", this.pos.x, this.pos.y);


    }

    move() {
      this.pos.add(this.vel);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;

    }

  }

  function touchStarted() {
    getAudioContext().resume();
  }
