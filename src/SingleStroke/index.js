import newSpiral from '../Spiral';
import createCanvas from './createCanvas';

const SingleStroke = (() => {
  const c = createCanvas();
  const ctx = c.getContext('2d');

  let spiral;

  const init = () => {
    const diagonal = Math.sqrt(c.width ** 2 + c.height ** 2);

    spiral = newSpiral({
      center: { x: c.width / 2, y: c.height / 2 },
      diameter: diagonal,
    });
  };

  const draw = () => {
    spiral.jitter({});
    spiral.points.forEach((point) => {
      const { x, y } = point;
      ctx.lineTo(x, y);
    });
  };

  const start = () => {
    init();
    draw();
    // ctx.closePath();
    // ctx.fill();
    ctx.stroke();
  };

  return {
    start,
  };
})();

export default SingleStroke;
