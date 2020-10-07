var img1, img2, img3, img4, img5, img6;
timer = 0;
state = 0;
var mic;
var vol = 0;
var song1;


function preload() {
  song1 = loadSound("assets/l.mp3");
}

function setup() {
  createCanvas(1000, 800);
  textSize(24);
  mic = new p5.AudioIn();
  mic.start();



  img1 = loadImage("assets/0.png");
  img2 = loadImage("assets/1.png");
  img3 = loadImage("assets/2.png");
  img4 = loadImage("assets/3.png");
  img5 = loadImage("assets/4a.png");
  img6 = loadImage("assets/4b.png");

  imageMode(CENTER);

}

function draw() {

  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1
  switch (state) { //needs nested  curly brackets


    case 0:
      image(img1, width / 2, height / 2, 1000, 800);
      text("case 0", 250, 250);
      state = 0;
      song1.pause();
      break;



    case 1:
      image(img1, width / 2, height / 2, 1000, 800);

      break;


    case 2:
      image(img2, width / 2, height / 2, 1000, 800);
      text("case 1", 250, 250);
  
      song1.pause();

      state = 2;
      break;


    case 3:
      image(img2, width / 2, height / 2, 1000, 800);
      break;


    case 4:
      image(img3, width / 2, height / 2, 1000, 800);
      text("case 2", 250, 250);
      song1.pause();

      timer++; //multiply is *
      if (timer > 5 * 30) {
        state = 5;
      }
      break;


    case 5:
      image(img4, width / 2, height / 2, 1000, 800);
      text("case 3", 250, 250);
      song1.pause();
      if (vol > .02) {
        state = 6
        break;

      }

      break;
    case 6:
      image(img6, width / 2, height / 2, 1000, 800);
      text("case 4", 250, 250);
      state = 6
      //https://www.youtube.com/watch?v=40Me1-yAtTc
      if (!song1.isPlaying()) {
        song1.play();
      }
      break;


  }
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);

}

function mouseReleased() {

  state++; // state= state+1
  if (state > 6) {
    state = 0;

  }
}



function touchStarted() {
  getAudioContext().resume();
}
