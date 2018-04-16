var lat;
var lon;

function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
  fill(50);
  textSize(100)
  textAlign(CENTER)
  translate(width/2, height/2)
  text(lat, 0, 0);
  text(lon, 100, 0);
}



have_coordinates = function(position) {
		lat = position.coords.latitude;
		lon = position.coords.longitude;
		//heading = position.coords.heading;
		console.log(position);

		//populate html tag based on location
		document.getElementById("gps_content").innerHTML = "My current position is " + lat + " , " + lon;
	
	}

//produces error messages if there is a problem
onError = function(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

	//listener to track changes in location
	//step 1: set options for geolocation
	var options = {enableHighAccuracy: true,timeout: 5000,maximumAge: 0,desiredAccuracy: 0, frequency: 1 };

//step 2: the watchPosition method listens for changes in position (latitude and longitude)
	navigator.geolocation.watchPosition(have_coordinates, onError, options);

