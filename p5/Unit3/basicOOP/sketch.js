var myCar1;

function setup() {
  createCanvas(800, 800);
  myCar1 = new Car(); // new spans object
}

function draw() {
  background("white")
  myCar1.display();
}
// can make multiple

class Car {
  //inatlizes everything or make it runs
  constructor() {
    //attributes // class //color //size
    //this particular x blongs to this car
    this.x = 100;
  }
  //methods

  display() //what it looks like
  {

    rect(this.x, 100, 50, 25);
  }
}
