// Props
const WIDTH = 600; // px
let HEIGHT = null; // px, null if square
const RESOLUTION = 100;
const radialSteps = RESOLUTION / 10; // Even & > 8
const POLAR_TURNS = RESOLUTION; // eyeballed 6

// derived
HEIGHT = HEIGHT || WIDTH;
const diagonalLength = Math.sqrt(WIDTH ** 2 + HEIGHT ** 2);
const polarGap = diagonalLength / POLAR_TURNS;
const centerX = WIDTH / 2;
const centerY = HEIGHT / 2;
const angleIncrement = (2 * Math.PI) / radialSteps;

// Setup
const c = document.getElementById('canvas');
c.width = WIDTH;
c.height = HEIGHT;
const ctx = c.getContext('2d');
ctx.moveTo(centerX, centerY);

let angle = angleIncrement;
let r;

do {
  r = polarGap * angle;

  const x = centerX + r * Math.cos(angle);
  const y = centerY + r * Math.sin(angle);
  ctx.lineTo(x, y);

  angle += angleIncrement;
} while (r < diagonalLength / 2);
ctx.stroke();
