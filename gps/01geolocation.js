//this function is called when position shifts
have_coordinates = function(position) {
		lat = position.coords.latitude;
		lon = position.coords.longitude;
		console.log(lat, lon);

		//populate html tag based on location
		document.getElementById("gps_content").innerHTML = "My current position is " + lat + " , " + lon;
	
	}

onError = function(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

	//listener to track changes in location
	var options = {enableHighAccuracy: true,timeout: 5000,maximumAge: 0,desiredAccuracy: 0, frequency: 1 };
	navigator.geolocation.watchPosition(have_coordinates, onError, options);


