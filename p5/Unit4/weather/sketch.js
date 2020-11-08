// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temperature;
var sun;
var img1, img2;



function setup() {
  createCanvas(600, 600);
  f1 = loadFont("assets/b.ttf");
  img1 = loadImage("assets/w.jpeg");
  img2 = loadImage("assets/c.png");
  imageMode(CENTER);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Minonk,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=3a64aa8e9e042313ed7e9ab5b7e9fe06'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;


}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;


    case 1:
      image(img1, width/2, height/2);
      textFont(f1);
      fill("green");
      rect(0, 500, 600, 100);

      fill('black');
      text("What is the weather in " + weather.name + "?", 250, 520);
      text("windspeed is " + windspeed, 250, 540);
      text("temperature is " + temperature + " degree F", 250, 560);
      text ("humidity" + humidity, 250, 580);



      // cloud



      noStroke();
      image(img2, x, 50, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;

  }
}
