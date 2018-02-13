function setup() {
  createCanvas(width(), height());
}

function draw() {
  background(200);
  rotateZ(radians(rotationZ));
  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
  fill(50);
  textSize(32)
  textAlign(CENTER)
 text(0,200,radians(rotationZ))
}