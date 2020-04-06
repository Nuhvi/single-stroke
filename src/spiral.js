// Props
const WIDTH = 600;
const HEIGHT = 600;
const RADIAL_STEPS = 10; // Even & > 8
const POLAR_TURNS = 50;

// derived
const diagonalLength = Math.sqrt(WIDTH ** 2 + HEIGHT ** 2);
const polarGap = diagonalLength / (POLAR_TURNS * 12); // 15 is eyeballed
const centerX = WIDTH / 2;
const centerY = (HEIGHT || WIDTH) / 2;
const increment = (2 * Math.PI) / RADIAL_STEPS;

// Setup
const c = document.getElementById('canvas');
c.width = WIDTH;
c.height = HEIGHT;
const ctx = c.getContext('2d');
ctx.moveTo(centerX, centerY);

let angle = increment;

while (angle < POLAR_TURNS * 2 * Math.PI) {
  const x = centerX + angle * Math.cos(angle) * polarGap;
  const y = centerY + angle * Math.sin(angle) * polarGap;
  ctx.lineTo(x, y);
  angle += increment;
}
ctx.stroke();
