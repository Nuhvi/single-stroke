import * as p5 from 'p5';
import Spiral from './spiral/index';
import createLayout from './layout/index';
import { SpiralInterface } from './interfaces';

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

  p5.setup = () => {
    let width = p5.windowHeight;
    let height = p5.windowHeight;

    const canvas = p5.createCanvas(width, height);
    p5.background(COLOR_BACKGROUND);
    p5.frameRate(FRAME_RATE);

    canvas.dragOver(() => {
      p5.background('red');
    });

    canvas.dragLeave(() => {
      p5.background(COLOR_BACKGROUND);
    });

    canvas.drop(() => {});

    spiral = Spiral(
      {
        center: { x: width / 2, y: height / 2 },
        diameter: Math.sqrt(width ** 2 + height ** 2),
      },
      p5,
    );

    p5.strokeWeight(1);

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
