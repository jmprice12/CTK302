var f;
var f2;

function setup() {
createCanvas(2000,1000);
f=loadFont("assets/l.ttf");
f2=loadFont("assets/b.ttf");
textAlign(CENTER);
}

function draw() {
background ("#B3B7C0");
fill("#0A0942");
textFont(f);
textSize(25);
text("It is the quality of one’s", 900,500);
text("convictions that determines success,", 900,600);
text("not the number of followers.", 900,700);

textFont(f2);
textSize(100);
text("-Remus Lupin", 1000,900);

}
// second font with quote
