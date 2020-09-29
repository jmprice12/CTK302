var mic;
var vol = 0;
var c = '#d68571';
var img1;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  //activates mic
  //need to use mic imput us it put in set up NOT draw
  img1 = loadImage("assets/cat.png");
  imageMode(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);
  // image(myimage 0,0)
  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .20) {
    background("#829891")
    image(img1, width / 2, height / 2, 200, 200); // if the volume is LOUD?

    // do something
    c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
    // could move it to another state

  }

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
