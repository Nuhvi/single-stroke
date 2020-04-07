import './main.css';
import calculateSpiralPath from './spiral.js';

// props
const WIDTH = 500; // px
let HEIGHT = null; // px, null if square

// derived
HEIGHT = HEIGHT || WIDTH;

// Setup
const c = document.getElementById('canvas');
c.width = WIDTH;
c.height = HEIGHT;
const ctx = c.getContext('2d');
ctx.moveTo(WIDTH / 2, HEIGHT / 2);

const diagonal = Math.sqrt(WIDTH ** 2 + HEIGHT ** 2);

const { spiralVerticies } = calculateSpiralPath({
  diameter: diagonal,
});

spiralVerticies.forEach((vertex) => {
  let [x, y] = vertex;
  x += WIDTH / 2;
  y += HEIGHT / 2;

  ctx.lineTo(x, y);
  ctx.strokeRect(x - 1.5, y - 1.5, 3, 3);
});

ctx.stroke();
