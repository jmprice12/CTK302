var bubbles = [];
var img1, img2;
var sound1;

function preload() {
  song1 = loadSound("assets/m.mp3");
}

function setup() {


  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '15M21Jf_N8Nrnm8JLstzk1dpyBWssjd1QXe_9I1GcJdY';
  //let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(800, 800);
  // images game from google images
  img1 = loadImage("assets/b.png");
  img2 = loadImage("assets/t.png");

  textAlign(CENTER);
  imageMode(CENTER);
  //ellipseMode(CENTER);
  //rectMode(CENTER);
  //https://www.bensound.com/royalty-free-music/track/the-elevator-bossa-nova
  song1.play();

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i]["tv"])); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  //background("red")
  image(img1, width / 2, height / 2);


  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, mytv) {
    this.name = myName;
    this.tv = mytv;
    this.pos = createVector(random(width), random(height));

  }


  display() {
    //if (this.shape == "Square") {
    //  rect(this.pos.x, this.pos.y, 50, 50);
    //} else {
    image(img2, this.pos.x, this.pos.y, 150, 150);
    //}

    text(this.name, this.pos.x, this.pos.y - 16);
    text(this.tv, this.pos.x, this.pos.y + 16);
  }
  drive() {
    this.pos.x += 3;
    if (this.pos.x > width) this.pos.x = 0;
  }

}
function touchStarted() {
  getAudioContext().resume();
}
