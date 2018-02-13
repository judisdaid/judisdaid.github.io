function setup() {
	createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(255);

  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
  fill(50);
  textSize(32)
  textAlign(CENTER)
   text(0,displayWidth/2,"test")
 text(200,200,radians(rotationZ))
}