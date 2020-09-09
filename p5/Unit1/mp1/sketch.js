var f;
var song1;

function preload() {
  song1 = loadSound("assets/ob.mp3");

}

function setup() {
  createCanvas(1200, 400);
   song1.pause();

  f = loadFont("assets/m.ttf");

}
//https://p5js.org/examples/sound-pan-sound.html
function mousePressed() {
  song1.play();
}
function mouseReleased(){
  song1.pause();
}



function draw() {


  background("#a3aeba");

  if (mouseIsPressed) {
    background("#2F3042");

  } else {
    background("#a3aeba");
  }
  noStroke();
  fill("#c0c179");
  quad(0, 401, 136, 230, 1200, 230, 1200, 399);

  fill("black")
  textFont(f);
  textSize(100);
  text("By day Ollie is your typical adorable dog, traveling the community greeting his friendly neighbors.", 100, 343);
  if (mouseIsPressed) {
    fill("#c0c179");
    quad(0, 401, 136, 230, 800, 230, 800, 399);

    fill("black")
    textFont(f);
    textSize(100);
    text("But under the cover of the night, that adorable disguise is discarded and he becomes a vicious vigilante who protects his neighbors from the earth's evil scums who plan to execute their nefarious crimes.", 100, 343);
  } else {

    fill("black")
    textFont(f);
    textSize(100);
    text("By day Ollie is your typical adorable dog, traveling the community greeting his friendly neighbors.", 100, 343);
  }


  //body
  stroke(0, 0, 0);
  fill("#bb9b73");
  rect(250, 125, 150, 200);


  fill("#bb9b73");
  //leftleg
  rect(225, 225, 25, 100);
  //rightleg
  rect(400, 225, 25, 100);
  //front left paw
  rect(275, 275, 50, 50);
  //front right paw
  rect(325, 275, 50, 50);
  //left ear
  fill("#967244");
  triangle(260, 125, 220, 177, 216, 128);
  //right ear
  triangle(385, 125, 425, 128, 420, 177);
  //left eye
  fill("white")
  ellipse(296, 168, 25, 25);
  //cute left eye
  fill("#1b1c17")
  ellipse(296, 168, 18, 18);
  //cute right eye
  fill("white")
  ellipse(344, 168, 25, 25);
  fill("#1b1c17")
  ellipse(344, 168, 18, 18);



  //left claw
  //Left
  fill("#1b1c17");
  ellipse(285, 319, 2, 10);

  //Center
  fill("#1b1c17");
  ellipse(295, 319, 2, 10);

  //right
  fill("#1b1c17");
  ellipse(305, 319, 2, 10);

  //Right claw
  //Left
  fill("#1b1c17");
  ellipse(344, 319, 2, 10);

  //Center
  fill("#1b1c17");
  ellipse(354, 319, 2, 10);

  //right
  fill("#1b1c17");
  ellipse(364, 319, 2, 10);


  //Left leg claw
  //Left
  fill("#1b1c17");
  ellipse(228, 319, 2, 10);

  //Center
  fill("#1b1c17");
  ellipse(234, 319, 2, 10);

  //right
  fill("#1b1c17");
  ellipse(240, 319, 2, 10);

  //right leg claw
  //Left
  fill("#1b1c17");
  ellipse(420, 319, 2, 10);

  //Center
  fill("#1b1c17");
  ellipse(414, 319, 2, 10);

  //right
  fill("#1b1c17");
  ellipse(408, 319, 2, 10);

  //house right
  fill("#DBD3BE")
  rect(970, 75, 200, 200);
  fill("#7C311D")
  triangle(951, 80, 1067, 7, 1190, 80);
  //door
  fill("#7C311D")
  rect(1033, 144, 75, 130);
  fill("black")
  ellipse(1094, 215, 15, 15);

  //house middle
  fill("#DBD3BE")
  rect(686, 75, 200, 200);
  fill("#7C311D")
  triangle(670, 80, 783, 7, 896, 80);
  //door
  fill("#7C311D")
  rect(745, 145, 75, 130);
  fill("black")
  ellipse(807, 216, 15, 15);

  //left house
  //Left Window
  fill("#a3aeba");
  if (mouseIsPressed) {
    fill("#FBE075");
  } else {
    fill("#a3aeba");
  }
  // (x,y, width, hight)
  rect(697, 157, 40, 40);

  //Right Window
  fill("#a3aeba");
  if (mouseIsPressed) {
    fill("#FBE075");
  } else {
    fill("#a3aeba");
  }
  // (x,y, width, hight)
  rect(827, 157, 40, 40);

  //Right Window cross Verticle
  fill("#554B3F");
  // (x,y, width, hight)
  rect(844, 158, 5, 40);

  //Right Window cross Horizonral
  fill("#554B3F");
  // (x,y, width, hight)
  rect(826, 179, 40, 5);

  //Left Window cross Verticle
  fill("#554B3F");
  // (x,y, width, hight)
  rect(714, 158, 5, 40);

  //Left Window cross Horizonral
  fill("#554B3F");
  // (x,y, width, hight)
  rect(697, 178, 40, 5);

  //right house
  //right Window
  fill("#a3aeba");
  if (mouseIsPressed) {
    fill("#FBE075");
  } else {
    fill("#a3aeba");
  }
  // (x,y, width, hight)
  rect(1117, 157, 40, 40);

  //left Window
  fill("#a3aeba");
  if (mouseIsPressed) {
    fill("#FBE075");
  } else {
    fill("#a3aeba");
  }
  // (x,y, width, hight)
  rect(983, 157, 40, 40);

  //Right Window cross Verticle
  fill("#554B3F");
  // (x,y, width, hight)
  rect(1135, 158, 5, 40);

  //Right Window cross Horizonral
  fill("#554B3F");
  // (x,y, width, hight)
  rect(983, 179, 40, 5);

  //Left Window cross Verticle
  fill("#554B3F");
  // (x,y, width, hight)
  rect(1000, 158, 5, 40);

  //Left Window cross Horizonral
  fill("#554B3F");
  // (x,y, width, hight)
  rect(1118, 178, 40, 5);


  //Sun/moon
  fill("#F8D250");
  ellipse(0, 0, 150, 150);
  if (mouseIsPressed) {
    fill("#FBE075");
    ellipse(0, 0, 159, 150);
    noStroke();



  }

  // Code for smile https://editor.p5js.org/andrewurodov/sketches/HypyqUQ5-
  //smile
  noFill();
  stroke(0, 0, 0);
  arc(321, 209, 50, 50, 0, PI);
  //mask
  if (mouseIsPressed) {
    fill("#7C311D")
    //(x,y,w,h)
    rect(251, 153, 150, 35);
    //left eye
    fill("white")
    ellipse(296, 168, 25, 25);
    //cute left eye
    fill("#1b1c17")
    ellipse(296, 168, 18, 18);
    //cute right eye
    fill("white")
    ellipse(344, 168, 25, 25);
    fill("#1b1c17")
    ellipse(344, 168, 18, 18);

    fill("#7C311D")
    noStroke();
    rect(251, 153, 150, 12);
    // mouth

    fill("black");
    rect(290, 208, 65, 30);
    //top L tooth
    noStroke();
    fill("white");
    triangle(290, 208, 309, 208, 300, 221);

    //L tooth
    noStroke();
    fill("white");
    triangle(309, 208, 328, 208, 315, 221);
    //R tooth
    noStroke();
    fill("white");
    triangle(326, 208, 354, 208, 338, 221);

    //bottom left tooth
    noStroke();
    fill("white");
    triangle(290, 238, 302, 229, 308, 238);
    //bottom middle tooth
    noStroke();
    fill("white");
    triangle(308, 238, 320, 229, 330, 238);
    //bottom right tooth
    noStroke();
    fill("white");
    triangle(329, 238, 338, 229, 354, 238);



  }

  //text(mouseX + ', ' + mouseY, 329, 80);

}

function touchStarted() {
  getAudioContext().resume();
}
