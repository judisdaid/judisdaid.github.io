var compassHeading = 0;
var txt = "ABCDEFGH"

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
  

  if(compassHeading >45 && compassHeading <90) {
  		text(txt,0,0)
  } else {
  		text(compassHeading,0,0)
  }

}

window.addEventListener('deviceorientation', function(e) 
{
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
  if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = alpha;
        }
});