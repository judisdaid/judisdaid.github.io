//introduce global variables
var mirrorText;
var mirrorSplit;
var index;
var drawCount;


function setup() {
  console.log("10:49")
  // put setup code that runs once
  mirrorText = "they are at war with the human";
  //split the text into units
  mirrorSplit = mirrorText.split(" ");
  //build a canvas
  createCanvas(windowWidth, windowHeight);
  //use a font
  textFont("Courier", 80);
  //give index an initial value
  index = 0;
  //frameRate(20)
  //give an initial value to drawCount
  drawCount = 0;
}

function draw() {
	//clear the screen at beginning of each draw
	background(255);
  // put drawing code here: runs 60 x per second
  //we need a color for the text
  fill(255,0,0);
  //center the text by translating the grid
  translate(windowWidth/2, windowHeight/2);
  textAlign(CENTER);

  text(mirrorSplit[index], 0, random(-20,20));

  drawCount = drawCount + 1;

//modulus (if drawCount divided by some number has a 0 remainder)
  if(drawCount % 40 == 0) {

		index = index + 1;

  		if(index >= mirrorSplit.length) {
  			index = 0;
 		 }
//clear background
 	
}


}



