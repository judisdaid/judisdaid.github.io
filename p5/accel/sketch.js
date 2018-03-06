function setup() {
	createCanvas(window.innerWidth, window.innerHeight, P2D);
	frmaeRate(10)
}

function draw() {
  background(255);

  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
  fill(50);
  textSize(100)
  textAlign(CENTER)
  translate(width/2, 200)
 

  if(abs(accelerationX) > 3 || abs(accelerationY) > 3) {
  	text("accelerationx: \n" + accelerationX + "\n accelerationY: \n" + accelerationY + "\n accelerationZ: \n" + accelerationZ, 0,0)
  }

}