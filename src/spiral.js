// Props
const SIDE_LENGTH = 400;
const RADIAL_STEPS = 10; // Even & > 8
const POLAR_TURNS = 50;

// derived
const diagonalLength = Math.sqrt(Math.pow(SIDE_LENGTH, 2) * 2);
const polarGap = diagonalLength / (POLAR_TURNS * 12); // 15 is eyeballed
const center = SIDE_LENGTH / 2;
const increment = (2 * Math.PI) / RADIAL_STEPS;

// Setup
const c = document.getElementById('canvas');
c.width = SIDE_LENGTH;
c.height = SIDE_LENGTH;
const ctx = c.getContext('2d');
ctx.moveTo(center, center);

let angle = increment;

while (angle < POLAR_TURNS * 2 * Math.PI) {
  let x = center + angle * Math.cos(angle) * polarGap;
  let y = center + angle * Math.sin(angle) * polarGap;
  ctx.lineTo(x, y);
  angle = angle + increment;
}
ctx.stroke();
