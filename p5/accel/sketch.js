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
  translate(width/2, 30)
 text("accelerationx:" + accelerationX, 0,0)
 text("accelerationx:" + accelerationY, 0,20)
}