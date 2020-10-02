var mic;
var vol;
var y = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  background('#ffd0cc');
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {

  vol = (mic.getLevel()).toFixed(2);

  switch (state) {

    case 0:
      background('#ff6fa9')
      text("shhhhhhhhhhh", 250, 250);
      if (vol > .10) {
        state = 1
      }
      break;

    case 1:
      background('#00b7cc')
      print('words');
      background('#ff8195')
      text("QUIET DOWN!", 250, 250);
      if (vol < .10) {
        state = 0
      }
      break;



  }



  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);

}

function touchStarted() {
  getAudioContext().resume();


}
