var threshold;
var img

function setup() {
	createCanvas(window.innerWidth, window.innerHeight, P2D);
	threshold = 8
	count = 0
  img = loadImage("assets/abba.jpg"); 
	//devideOrientation(LANDSCAPE)

}

function draw() {
  background(255);

  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
  fill(50);
  textSize(100)
  textAlign(CENTER)
 

 

  if(round(abs(accelerationX)) > threshold) {
      //displayText = letters[floor(random(numberOfItems))]
      //background(random(255),random(255),random(255))
        image(img, 0,0, width, height)
  
  }
  

}