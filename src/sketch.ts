import * as p5 from 'p5';
import Spiral from './spiral';
import { SpiralInterface } from './interfaces';

export default (p5: p5, imgSrc: string) => {
  let spiral: SpiralInterface;
  let play: boolean = false;

  p5.setup = () => {
    let img = p5.createImg(imgSrc, 'uploaded image');
    if (img) p5.image(img, 0, 0);
    p5.loadPixels();
    img.remove();

    // spiral = Spiral(p5, {
    //   center: { x: width / 2, y: height / 2 },
    //   diameter: Math.sqrt(width ** 2 + height ** 2),
    // });

    p5.strokeWeight(1.5);
  };

  p5.draw = () => {
    if (play) {
      spiral.render();
    }
  };
};
