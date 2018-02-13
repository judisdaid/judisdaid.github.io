//more information:
//http://www.html5rocks.com/en/tutorials/device/orientation/

//called by device motion listener - contains information about the change in orientation (stored as argument "e")
motion = function(e) {

        acc = e.acceleration;
        acc_x = Math.round(acc.x);
        acc_y = Math.round(acc.y);
        acc_z = Math.round(acc.z);
        myMotion();
    
    }

//device motion that can track orientation on space
	window.addEventListener('devicemotion', motion, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("accel_content");


    function myMotion(){
     text_area.innerHTML = "acceleration_x: <br/>" + acc_x + "<br/><br/>";
        text_area.innerHTML += "acceleration_y: <br/>" + acc_y + "<br/><br/>";
        text_area.innerHTML += "acceleration_z: <br/>" + acc_z + "<br/><br/>";
       
        
	}


