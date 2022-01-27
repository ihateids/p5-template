
// to use p5 sound
let sound: p5.SoundFile;
// a hack for loadSound
declare function loadSound(path: string): p5.SoundFile;
// to use ml5 (no ml5 types available)
declare let ml5: any;
// to use qr code generator
let qr;
// to use face tracking
let tracker;


// P5 will call this function to preload any assets (sounds, sprites, etc) and will continue with setup only when finished
function preload() {
  // sound = loadSound('assets/ding.mp3');
}

async function setup() {
  console.log("🚀 - Setup initialized - P5 is running");
  createCanvas(windowWidth, windowHeight);
  // qr = qrcode(4, 'L');
  // tracker = new clm.tracker();
  // await ml5. ....
  // sound.play();
  
}

// P5 will run this function whenever window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  // use Axes helper for creating objects on screen
  Axes.draw(0, 0, true); // true - translate to middle of axes
  //Axes.draw(windowWidth / 2, windowHeight / 2, false); // true - do not translate to middle of axes
  textSize(40);
  fill(0, 0, 255, 5);
  textAlign(CENTER);
  text("Welcome to P5js 🚀", width / 2, height / 2);
}
