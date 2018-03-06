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
  translate(width/2, 100)
 text("accelerationx: \n" + accelerationX + "\n accelerationY: \n" + accelerationY + "\n accelerationZ: \n" + accelerationZ, 0,0)

}