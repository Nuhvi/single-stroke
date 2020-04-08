import newSpiral from './models/Spiral';

const SingleStroke = (() => {
  const WIDTH = 500;
  const HEIGHT = WIDTH;

  let ctx;
  let centerX;
  let centerY;

  const init = () => {
    const c = document.getElementById('canvas');
    c.width = WIDTH;
    c.height = HEIGHT;
    ctx = c.getContext('2d');

    centerX = WIDTH / 2;
    centerY = HEIGHT / 2;

    const diagonal = Math.sqrt(WIDTH ** 2 + HEIGHT ** 2);

    const spiral = newSpiral({
      diameter: diagonal,
    });

    spiral.moveTo({ x: centerX, y: centerY });

    spiral.path.forEach((point) => {
      const { x, y } = point;
      ctx.lineTo(x, y);
    });

    // ctx.closePath();
    // ctx.fill();
    ctx.stroke();
  };

  return {
    init,
  };
})();

export default SingleStroke;
