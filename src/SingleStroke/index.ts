import newSpiral from "../spiral";
import createCanvas from "./createCanvas";

const SingleStroke = (() => {
  let c;
  let ctx;
  let spiral;

  const init = (src) => {
    c = createCanvas(src);
    ctx = c.getContext("2d");

    const diagonal = Math.sqrt(c.width ** 2 + c.height ** 2);

    spiral = newSpiral({
      center: { x: c.width / 2, y: c.height / 2 },
      diameter: diagonal,
    });
  };

  const draw = () => {
    spiral.points.forEach((point) => {
      const { x, y } = point;
      ctx.lineTo(x, y);
    });

    spiral.vertexNormals.forEach((normal, i) => {
      ctx.beginPath();
      const { x1, y1 } = spiral.points[i];
      ctx.moveTo(x1, y1);
      const { x2, y2 } = normal;
      ctx.lineTo(x2, y2);
    });
  };

  const start = (src) => {
    init(src);
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
