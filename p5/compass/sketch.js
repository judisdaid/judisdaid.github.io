function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(200);
  rotateZ(radians(rotationZ));
  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
 text(0,0,radians(rotationZ))
}