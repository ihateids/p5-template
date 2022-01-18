
// P5 will call this function to preload any assets (sounds, sprites, etc) and will continue with setup only when finished
function preload() {
}

function setup() {
  console.log("🚀 - Setup initialized - P5 is running");
  createCanvas(windowWidth, windowHeight)
}

// P5 will run this function whenever window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// P5 will call this method with animation frame defined with frameRate
function draw() {
  // use Axes helper for creating objects on screen
  Axes.draw(0, 0, true); // true - translate to middle of axes
  //Axes.draw(windowWidth / 2, windowHeight / 2, false); // true - do not translate to middle of axes
  textSize(40);
  fill(0, 0, 255, 5);
  textAlign(CENTER);
  text("Welcome to P5js 🚀", width / 2, height / 2);
}