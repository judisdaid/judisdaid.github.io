//use the coordinates of a site you want to work with
site_coords = {lat: 41.883921, lon: -87.624984};

//use a name for the site
site_name = "Chicago Cultural Center";

//choose a threshold for site-specific content
threshold_ft = 75;
threshold_mi = .1;

//this function is called when position shifts
have_coordinates = function(position) {
		myLat = position.coords.latitude;
		myLon = position.coords.longitude;
		console.log(myLat, myLon);
		distance = proximity(myLat,myLon,site_coords.lat,site_coords.lon);
		
		//THIS IS WHERE CONTENT IS MANIPULATED :: populate html tag based on location
		
		if(distance.ft < threshold_ft) {
			//change the innerHTML to display different content on arrival
			document.getElementById("gps_content").innerHTML = "I am at " +site_name;
		} else {
			//change the innerHTML to display different content during travel
			document.getElementById("gps_content").innerHTML = "I am  " + distance.ft + " feet from " + site_name;
		}
	
	}

onError = function(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }

	//listener to track changes in location
	var options = {enableHighAccuracy: true,timeout: 5000,maximumAge: 0,desiredAccuracy: 0, frequency: 1 };
	navigator.geolocation.watchPosition(have_coordinates, onError, options);



function proximity(lat1,lon1,lat2,lon2) {
  	var R = 6371; // Radius of the earth in km
  	var dLat = deg2rad(lat2-lat1);  // deg2rad below
  	var dLon = deg2rad(lon2-lon1); 
  	var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var distance_in_km = R * c; // Distance in km
  var distance_in_miles = distance_in_km/1.609344;
  var distance_in_feet = distance_in_miles * 5280;

 
  return {km: distance_in_km, mi: distance_in_miles, ft: distance_in_feet};
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
