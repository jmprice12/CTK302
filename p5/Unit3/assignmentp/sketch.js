let cars = []

let img1;

function setup() {
  createCanvas(600, 600);
  img1 = loadImage("assets/h.jpg");
  imageMode(CENTER);


}

function draw() {
  background("white")
  cars.push(new Car());
  image(img1, width / 2, height / 2);

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
}
// can make multiple

class Car {
  //inatlizes everything or make it runs
  constructor() {
    //attributes
    //this particular x blongs to this car
    this.pos = createVector(0, 0, 0);
    this.vel = createVector(random(15), random(10));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(255);
    this.s = random(5, 10);

  }
  //methods

  display() {
    fill(this.r, this.g, this.b, this.a, this.s);
    text("HAPPY HALLOWEEN!!", this.pos.x, this.pos.y, 10);


  }
  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
    //if (this.pos.x > width) this.pos.x = 0;
    //if (this.pos.x < 0) this.pos.x = width;
    //if (this.pos.y > height) this.pos.y = 0;
    //if (this.pos.y < 0) this.pos.y = height;
  }
}
