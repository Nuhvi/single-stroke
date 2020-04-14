import * as p5 from 'p5';
import Spiral from './Spiral';
import createLayout from './layout/index';
import { SpiralInterface } from './interfaces';
const placeholderImg = require('./assets/placeholder.png');

import {
  CANVAS_HEIGHT,
  CANVAS_ID,
  CANVAS_WIDTH,
  COLOR_BACKGROUND,
  FRAME_RATE,
} from './constants';

import './style.css';

const sketch = (p5: p5) => {
  const capturer = new CCapture({
    format: 'jpg',
    framerate: FRAME_RATE,
    quality: 100,
  });
  let canvas: HTMLElement | null;
  let exportAnimation: Boolean = false;
  let spiral: SpiralInterface;
  let img: p5.Image;

  p5.setup = () => {
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    p5.frameRate(FRAME_RATE);
    canvas = document.getElementById(CANVAS_ID);
    spiral = new Spiral(p5);

    spiral.render();

    if (exportAnimation) {
      capturer.start();
    }
  };

  p5.draw = () => {
    p5.background(COLOR_BACKGROUND);

    spiral.render();

    if (exportAnimation) {
      if (canvas) {
        capturer.capture(canvas);
      }

      if (spiral.isAnimationComplete) {
        p5.noLoop();
        capturer.stop();
        capturer.save();
      }
    }
  };
};

createLayout();
new p5(sketch);
