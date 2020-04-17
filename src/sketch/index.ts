import * as p5 from 'p5';
import Spiral from './models/spiral';
import { SpiralInterface } from '../interfaces';
import { scaleDimensions } from './helpers/index';

export default (p5: p5, imgSrc: string, container: HTMLDivElement) => {
  let spiral: SpiralInterface;
  let play: boolean = true;
  let img: p5.Image;

  p5.preload = () => {
    img = p5.loadImage(imgSrc);
  };

  p5.setup = () => {
    const [width, height] = scaleDimensions(
      { w: img.width, h: img.height },
      { w: container.offsetWidth, h: container.offsetHeight },
    );

    p5.resizeCanvas(width, height);
    p5.pixelDensity(1);

    img.loadPixels();

    spiral = Spiral(p5, img, {
      center: { x: width / 2, y: height / 2 },
      diameter: Math.sqrt(width ** 2 + height ** 2),
    });
  };

  p5.draw = () => {
    if (play && spiral) {
      spiral.render();
    }
  };
};
