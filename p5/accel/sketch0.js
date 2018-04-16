
var threshold;
var acc_x;
var acc_y;
var acc_z;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight, P2D);
	threshold = 8
	count = 0
	//devideOrientation(LANDSCAPE)

}

function draw() {
  background(255);

  //rotateX(radians(rotationX));
  //rotateY(radians(rotationY));
  fill(50);
  textSize(100)
  textAlign(CENTER)
  translate(width/2, height/2)
 

  text(round(abs(acc_x)) + "\n" + round(abs(acc_y)), 0,0)

  
  

}





motion = function(e) {

        acc = e.acceleration;
        acc_x = Math.round(acc.x);
        acc_y = Math.round(acc.y);
        acc_z = Math.round(acc.z);
      
    
    }

//device motion that can track orientation on space
  window.addEventListener('devicemotion', motion, false);
    
