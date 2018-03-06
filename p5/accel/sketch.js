
var threshold;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight, P2D);
	threshold = 1

}

function draw() {
  background(255);

  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
  fill(50);
  textSize(100)
  textAlign(CENTER)
  translate(width/2, 200)
 

  text(abs(accelerationX) + "\n" + abs(accelerationY), 0,0)
  

}