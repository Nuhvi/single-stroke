// Props
const WIDTH = 600; // px
let HEIGHT = null; // px, null if square
const RESOLUTION = 72;

const polarSteps = RESOLUTION / 8; // Even & > 8
const POLAR_TURNS = RESOLUTION * 6; // eyeballed 6

// derived
HEIGHT = HEIGHT || WIDTH;
const diagonalLength = Math.sqrt(WIDTH ** 2 + HEIGHT ** 2);
const polarGap = diagonalLength / POLAR_TURNS;
const centerX = WIDTH / 2;
const centerY = HEIGHT / 2;
const increment = (2 * Math.PI) / polarSteps;

// Setup
const c = document.getElementById('canvas');
c.width = WIDTH;
c.height = HEIGHT;
const ctx = c.getContext('2d');
ctx.moveTo(centerX, centerY);

let angle = increment;

while (angle < POLAR_TURNS * Math.PI) {
  const x = centerX + angle * Math.cos(angle) * polarGap;
  const y = centerY + angle * Math.sin(angle) * polarGap;
  ctx.lineTo(x, y);
  angle += increment;
}
ctx.stroke();
