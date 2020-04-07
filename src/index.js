import './main.css';
import makeSpiral from './makeSpiral.js';
import makeStroke from './makeStroke.js';

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

const diagonal = Math.sqrt(WIDTH ** 2 + HEIGHT ** 2);

const baseSpiral = makeSpiral({
  diameter: diagonal,
});

// ctx.moveTo(centerX, centerY);
// baseSpiral.forEach((vertex) => {
//   let [x, y] = vertex;
//   x += centerX;
//   y += centerY;

//   ctx.lineTo(x, y);
// });

const offsetedSpiral = makeStroke({ path: baseSpiral });

ctx.moveTo(centerX, centerY);
offsetedSpiral.forEach((vertex) => {
  let [x, y] = vertex;
  x += centerX;
  y += centerY;

  ctx.lineTo(x, y);
});

ctx.closePath();
ctx.fill();
