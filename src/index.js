import './main.css';
import makeSpiral from './makeSpiral.js';

// props
const WIDTH = 500; // px
let HEIGHT = null; // px, null if square

// derived
HEIGHT = HEIGHT || WIDTH;
const centerX = WIDTH / 2;
const centerY = HEIGHT / 2;

// Setup
const c = document.getElementById('canvas');
c.width = WIDTH;
c.height = HEIGHT;
const ctx = c.getContext('2d');
ctx.moveTo(centerX, centerY);

const diagonal = Math.sqrt(WIDTH ** 2 + HEIGHT ** 2);

const baseSpiral = makeSpiral({
  diameter: diagonal,
});

baseSpiral.forEach((vertex) => {
  let [x, y] = vertex;
  x += centerX;
  y += centerY;

  ctx.lineTo(x, y);
});

ctx.moveTo(centerX, centerY);

const jitteredSpiral = makeSpiral({
  diameter: diagonal,
});

jitteredSpiral.forEach((vertex) => {
  let [x, y] = vertex;
  x += centerX;
  y += centerY;
  ctx.lineTo(x, y);
});

ctx.stroke();
