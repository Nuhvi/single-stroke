import * as p5 from 'p5';
import Spiral from './spiral/index';
import createLayout from './layout/index';
import { SpiralInterface } from './interfaces';
const placeholderImg = require('./assets/placeholder.png');

import {
  CANVAS_HEIGHT,
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
    const canvas = p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    p5.frameRate(FRAME_RATE);

    canvas.dragOver(() => {
      p5.background('red');
    });

    canvas.dragLeave(() => {
      p5.background(COLOR_BACKGROUND);
    });

    canvas.drop(() => {});

    spiral = Spiral();

    spiral.render();

    if (exportAnimation) {
      capturer.start();
    }
  };

  p5.draw = () => {
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
