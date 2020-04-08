import newSpiral from './models/Spiral';

const SingleStroke = (() => {
  const WIDTH = 500;
  const HEIGHT = WIDTH;

  let ctx;
  let spiral;

  const init = () => {
    const c = document.getElementById('canvas');
    c.width = WIDTH;
    c.height = HEIGHT;
    ctx = c.getContext('2d');

    const diagonal = Math.sqrt(WIDTH ** 2 + HEIGHT ** 2);

    spiral = newSpiral({
      center: { x: WIDTH / 2, y: HEIGHT / 2 },
      diameter: diagonal,
    });
  };

  const draw = () => {
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
