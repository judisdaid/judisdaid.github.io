//introduce global variables
var img


function setup() {
  // put setup code that runs once
createCanvas(displayWidth, displayHeight)
 img = loadImage("assets/abba.jpg")
 console.log("10:43")
}

function draw() {
	//clear the screen at beginning of each draw
	background(255);
  // put drawing code here: runs 60 x per second
  //we need a color for the text
  translate(displayWidth/2, displayHeight/2)
  image(img, 0,0)
 	

}




