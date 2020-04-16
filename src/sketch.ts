import * as p5 from 'p5';
import Spiral from './spiral';
import { SpiralInterface } from './interfaces';

export default (p5: p5, imgSrc: string, container: HTMLDivElement) => {
  let spiral: SpiralInterface;
  let play: boolean = true;

  p5.setup = () => {
    const onLoad = (img: p5.Element) => {
      let { width, height } = img.elt;
      const aspectRatio = width / height;
      if (aspectRatio > 1) {
        width = container.offsetWidth;
        height = width / aspectRatio;
      } else {
        height = container.offsetHeight;
        width = height * aspectRatio;
      }

      p5.resizeCanvas(width, height);
      p5.image(img, 0, 0, width, height);

      spiral = Spiral(p5, {
        center: { x: width / 2, y: height / 2 },
        diameter: Math.sqrt(width ** 2 + height ** 2),
      });

      p5.background('#fff5');
    };

    let img = p5.createImg(imgSrc, 'uploaded image', onLoad).hide();

    p5.strokeWeight(1.5);
  };

  p5.draw = () => {
    if (play && spiral) {
      spiral.render();
    }
  };
};
