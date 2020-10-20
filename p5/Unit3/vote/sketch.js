let cars = [];
let f1, f2, f3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  f1 = loadFont("assets/lm.otf");
  f2 = loadFont("assets/ds.otf");
  f3 = loadFont("assets/rd.TTF");
  // Spawn 20 objects
  for (let i = 0; i < 20; i++) {
    cars.push(new Car()); // makes 1 car
  }
}

function draw() {
  background(100);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move(); // moves 1 car

  }
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

    switch( this.font){
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
