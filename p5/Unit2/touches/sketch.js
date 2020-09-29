let numberOfTouches = 0 ;
var img1, img2;

function setup() {
  createCanvas(500, 500);
  img1 = loadImage("assets/o1.jpeg");
  img2 = loadImage("assets/o2.jpeg");
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
       text("OHHH YEAH!! I love you forever", 5, 22) ;
       image(img2, width / 2, height / 2, 400 ,400 );
      // put a picture here
      break ;

      case 2:
      text("don't be stingy scratch my ear ", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("OHHH YEAH!! I love you forever! ", 5, 22) ;
            // put a picture here
      break ;


  }

}
