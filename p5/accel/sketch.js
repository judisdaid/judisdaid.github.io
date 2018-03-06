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
  translate(width/2, 50)
 text("accelerationx: \n" + accelerationX + "accelerationY: \n" + accelerationY + "accelerationZ: \n" + accelerationZ, 0,0)

}