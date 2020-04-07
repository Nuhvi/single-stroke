import './main.css';
import calculateSpiralPath from './spiral.js';

// props
const WIDTH = 800; // px
let HEIGHT; // px, null if square

// derived
HEIGHT = HEIGHT || WIDTH;

// Setup
const c = document.getElementById('canvas');
c.width = WIDTH;
c.height = HEIGHT;
const ctx = c.getContext('2d');
ctx.moveTo(WIDTH / 2, HEIGHT / 2);

const { spiralVerticies } = calculateSpiralPath(WIDTH, HEIGHT);

spiralVerticies.forEach((vertex) => {
  ctx.lineTo(...vertex);
  ctx.strokeRect(vertex[0] - 1.5, vertex[1] - 1.5, 3, 3);
});

ctx.stroke();
