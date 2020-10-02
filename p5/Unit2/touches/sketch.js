let numberOfTouches = 0 ;
var img1, img2, img3, img4, img5;

function setup() {
  createCanvas(500, 500);
  img1 = loadImage("assets/o1.jpeg");
  img2 = loadImage("assets/o22.JPG");
  img3 = loadImage("assets/o3.JPG");
  img4 = loadImage("assets/o2.jpeg");
  img5 = loadImage("assets/05.JPG");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;// this automatically comes in
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is petting me give me some lovins", 5, 22) ;
      image(img1, width / 2, height / 2, 400 ,400 );
      break ;

      case 1:
       text( "that feel good give me some more scratchins", 5, 22) ;
       image(img2, width / 2, height / 2, 400 ,400 );
      // put a picture here
      break ;

      case 2:
      text("don't be stingy scratch my ear ", 5, 22) ;
      image(img3, width / 2, height / 2, 400 ,400 );
            // put a picture here
      break ;

      case 3:
     text("OHHH YEAH!! I love you forever keep it up! ", 5, 22) ;
     image(img4, width / 2, height / 2, 400 ,400 );
            // put a picture here
      break ;

      case 4:
     text("wait don't stop! ", 5, 22) ;
     image(img5, width / 2, height / 2, 400 ,400 );
            // put a picture here
      break ;


  }

}
