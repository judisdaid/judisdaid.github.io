
var threshold;
var txts = "ABCDEFG"
var letters = txts.split("")
var numLetters = letters.length
var displayText = "0";


function setup() {
	createCanvas(window.innerWidth, window.innerHeight, P2D);
	threshold = 8
	count = 0



}

function draw() {
  background(255);

  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
  fill(50);
  textSize(100)
  textAlign(CENTER)
 
  
  
   text(displayText, width/2, height/2)

  if(round(abs(accelerationX)) > threshold) {
      displayText = letters[floor(random(numLetters))]
  
  }
  

}