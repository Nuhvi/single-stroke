import newSpiral from './Spiral';

const SingleStroke = (() => {
  let ctx;
  let spiral;

  const loadIMG = (canvas) => {
    const { offsetWidth } = canvas;

    const img = document.createElement('img');
    img.src = canvas.attributes.src.value;

    // TODO remove the image
    img.width = 500;
    document.body.appendChild(img);

    const aspectRatio = img.height / img.width;

    return [offsetWidth, aspectRatio * offsetWidth];
  };

  const init = () => {
    const canvas = document.getElementById('canvas');

    const [width, height] = loadIMG(canvas);

    canvas.width = width;
    canvas.height = height;

    ctx = canvas.getContext('2d');

    const diagonal = Math.sqrt(width ** 2 + height ** 2);

    spiral = newSpiral({
      center: { x: width / 2, y: height / 2 },
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
