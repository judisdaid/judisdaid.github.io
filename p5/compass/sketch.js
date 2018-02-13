function setup() {
	createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(200);

  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
  fill(50);
  textSize(32)
  textAlign(CENTER)
   text(200,200,"test")
 text(200,200,radians(rotationZ))
}