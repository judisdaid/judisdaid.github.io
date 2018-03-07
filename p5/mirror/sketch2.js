//introduce global variables
var img


function setup() {
  // put setup code that runs once
createCanvas(windowWidth, windowHeight)
 img = loadImage("assets/abba.jpg")
 console.log("10:44")
}

function draw() {
	//clear the screen at beginning of each draw
	background(255);
  // put drawing code here: runs 60 x per second
  //we need a color for the text
  translate(windowWidth/2, windowHeight/2)
  image(img, 0,0,windowWidth,windowHeight)
 	

}




