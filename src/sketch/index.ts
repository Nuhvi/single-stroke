import * as p5 from 'p5';
import Spiral from '../spiral';
import { SpiralInterface } from '../interfaces';
import scaleDimensions from './scaleDimensions';

export default (p5: p5, imgSrc: string, container: HTMLDivElement) => {
  let spiral: SpiralInterface;
  let play: boolean = true;

  p5.setup = () => {
    const onLoad = (img: p5.Element) => {
      const [width, height] = scaleDimensions(
        { w: img.elt.width, h: img.elt.height },
        { w: container.offsetWidth, h: container.offsetHeight },
      );

      p5.resizeCanvas(width, height);
      p5.image(img, 0, 0, width, height);

      spiral = Spiral(p5, {
        center: { x: width / 2, y: height / 2 },
        diameter: Math.sqrt(width ** 2 + height ** 2),
      });

      p5.background('#ffff');
    };

    p5.createImg(imgSrc, 'uploaded image', onLoad).hide();

    p5.strokeWeight(1.5);
  };

  p5.draw = () => {
    if (play && spiral) {
      spiral.render();
    }
  };
};
