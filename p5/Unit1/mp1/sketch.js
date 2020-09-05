var f;

function setup() {
  createCanvas(1200, 400);
  f=loadFont("fonts/assets/o.ttf");


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

    //  fill("black");
    //  rect(290, 208, 65, 30);
      //L tooth
      noStroke();
      //fill("white");
      //triangle(290, 208,309,208,300,221);

      //L tooth
      noStroke();
      //fill("white");
      //triangle(309,208,326,208,315,221);
    }

  text(mouseX + ', ' + mouseY, 329, 80);

}
