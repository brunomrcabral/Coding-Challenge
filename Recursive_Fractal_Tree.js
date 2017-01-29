var angle = 0 ;
var slider ;

function setup() {
	createCanvas(400,400);
	slider = createSlider(0,TWO_PI, PI/4,0.01);
}

function draw() {
	background(51);
	angle=slider.value();
	stroke(255);
	translate(200,height); // Draw a branch from the root heading up
	branch(100);           // Draw a branch from the root heading up
 }

 function branch(len) { //Makes the tree branche 
 	line(0,0,0,-len);
 	translate(0,-len);
 	if( len > 4 ) {
 		push(); // push save this point
 		rotate(angle );
 		branch(len * 0.67); //Next branch ,recursive segment
  		pop(); // use the precious point 
  		push();// push save this point
  		rotate(-angle); //Rotate to the left 
 		branch(len * 0.67); // Draw left part of branch 
 		pop();// use the precious point 
 	}
 }
