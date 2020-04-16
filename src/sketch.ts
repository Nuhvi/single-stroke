import * as p5 from 'p5';
import Spiral from './spiral';
import setupCanvas from './setupCanvas';
import { SpiralInterface } from './interfaces';

export default (p5: p5, app: HTMLElement) => {
  let spiral: SpiralInterface;
  let play: boolean = false;

  p5.setup = () => {
    const [width, height] = setupCanvas(p5, app);

    spiral = Spiral(
      {
        center: { x: width / 2, y: height / 2 },
        diameter: Math.sqrt(width ** 2 + height ** 2),
      },
      p5,
    );

    p5.strokeWeight(1.5);
  };

  p5.draw = () => {
    if (play) {
      spiral.render();
    }
  };
};
