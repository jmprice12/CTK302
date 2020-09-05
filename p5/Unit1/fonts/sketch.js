var f;
var f2;
function setup() {
createCanvas(800,800);
f=loadFont("assets/b.ttf");
f2=loadFont("assets/b.ttf");
}

function draw() {
background (100);
textFont(f);
textSize(100);
text("Hello", width/2, height/2);

textFont(f2);
textSize(100);
text("quote", 200, 200);
}
// second font with quote
