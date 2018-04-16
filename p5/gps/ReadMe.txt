ReadMe
compasses, great circles & the loop
part 2: Geolocation
required: sublime text, web server, ftp client

Resources:
http://www.w3schools.com/html/html5_geolocation.asp
https://en.wikipedia.org/wiki/Haversine_formula
Note that geolocation now requires a secure server (https) in some browsers. This can be enabled easily with a hosting service such as dreamhost.

Geolocation
This example consists of javascript files working with html and css. To try different variations, change the javascript src in index.html. For example, two options are:

A. <script type="text/javascript" src="01geolocation.js"></script>
B. <script type="text/javascript" src="01geo_proximity.js"></script>

For utilizing this example, it is best to understand basic javascript: variables, arrays, functions and conditionals

When you have tried all of the examples, create your own variant, adapting content to a specific site.

IMPORTANT ALGORTHM #1: Great Circle Distances / Haversine
Please note that the proximity functions in these examples are a javascript adaptation of the Haversine formula for calculating spherical distances between sets of coordinates.