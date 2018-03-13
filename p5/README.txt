README

TECHNICAL
CREATIVE

~~~~ TECHNICAL ~~~~~
mirror2 is the in-class demo, so named to not overwrite your worn folder.

compass and accel folders contain templates for working with the compass and accelerometer to make embodied compositions

index.html in mirror2 can be linked tosketch2.js for a basic image display example. Images and some other media can only be displayed in p5js on a server. 

The in-class demo in mirror2 can be viewed offline by dragging index.html into a web browser. For the others, it is best to update your github repository as they can only be tested on a server. The compass and accel files can only be viewed on your smartphone.

Instead of adding the entire p5 folder, add mirror2, compass, and accel to your p5 folder so they are on the same level as the mirror folder from class.

To update code on github, the instructions are here:
https://pages.github.com/

1. git add --all
2. git commit -m "Some change I made"
3. git push -u origin master

Remember that github can be slow to update. One trick is to add a url string to the link to your script in the corresponding index.html file and change it each time before you update github. For example:
 <script src="sketch.js?x=012222"></script>

 Even so, it might still take 1-2 minutes for changes to be visible.

 You can add a line of code to your setup function in the js file that will indicate that the new code is active. For example:
 console.log("updated at 10:52")
 This line of code will send a message to the web browser console (that debug area we found in the upper right menu under "more tools -> developer tools").

 It can be hard to troubleshoot problems on the smartphone since it is viewed in an iOS or Android browser usually without developer tools. These will not run on a laptop since they use sensors specific to the phone. One way is to look at the link in a browser on your laptop. Even if the files doesn't work properly, you can see the developer tools console for any relevant errors.

 There is also a way to connect your iPhone to safari's developer tools to see errors directly from your iOS safari browser. Here is a decent explanation of that:
 https://appletoolbox.com/2014/05/use-web-inspector-debug-mobile-safari/

 ~~~~ CREATIVE ~~~~
 Consider evolving the in-class example, working with your materials from yesterday's morning workshop. If you get somewhere with this, consider how you might integrate some of your materials with the compass or accelerometer to create a composition that interacts with the body and space.




