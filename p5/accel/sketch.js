function setup() {
	createCanvas(window.innerWidth, window.innerHeight, P2D);
}

function draw() {
  background(255);

  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
  fill(50);
  textSize(100)
  textAlign(CENTER)
  translate(width/2, height/2)
 text("accelerationx: \n" + accelerationX, 0,0)
 text("accelerationY: \n" + accelerationY, 0,100)
}