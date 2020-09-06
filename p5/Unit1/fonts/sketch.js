var f;
var f2;

function setup() {
createCanvas(1000,1000);
f=loadFont("assets/l.ttf");
f2=loadFont("assets/b.ttf");
textAlign(CENTER);
}

function draw() {
background (100);
textFont(f);
textSize(10);
text("I solemnly swear that i'm up to no good", width/2, height/2);

textFont(f2);
textSize(100);
text("Leslie Knope", );

text(mouseX + " " + mouseY, 166, 792);
}
// second font with quote
