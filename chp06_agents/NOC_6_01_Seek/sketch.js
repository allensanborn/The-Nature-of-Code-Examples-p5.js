// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Seeking "vehicle" follows the mouse position

// Implements Craig Reynold's autonomous steering behaviors
// One vehicle "seeks"
// See: http://www.red3d.com/cwr/

var v;

function setup() {
  createCanvas(640,360);
  v = new Vehicle(width/2, height/2);
}

function draw() {
  background(51);

  var mouse = new PVector(mouseX, mouseY);

  // Draw an ellipse at the mouse location
  fill(127);
  stroke(200);
  strokeWeight(2);
  ellipse(mouse.x, mouse.y, 48, 48);

  // Call the appropriate steering behaviors for our agents
  v.seek(mouse);
  v.update();
  v.display();

};
