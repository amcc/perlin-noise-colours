let grid = 100;
let amount = 0.01;
let offset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  noStroke();

  let gap = width / grid;

  for (let y = 0; y < grid; y++) {
    for (let x = 0; x < grid; x++) {
      let xPosition = x * gap;
      let yPosition = y * gap;
      let r = noise(x * amount, y * amount, offset) * 255;
      let g = noise(x * amount + 100, y * amount, offset) * 255;
      let b = noise(x * amount + 200, y * amount, offset) * 255;
      fill(r, g, b);
      square(xPosition, yPosition, gap+1);
    }
  }
  offset += 0.001;
}
