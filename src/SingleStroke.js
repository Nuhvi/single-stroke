import newSpiral from './Spiral';

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

    spiral.calculateNormals();
    spiral.vertexNormals.forEach((normal, i) => {
      const p1 = spiral.points[i];
      const p2 = normal.clone().multiply(5).add(p1);
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
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
