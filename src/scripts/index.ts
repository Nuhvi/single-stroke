import Spiral from "../spiral";

const SingleStroke = (() => {
  let host;
  let img;
  let canvas;
  let ctx;
  let spiral;
  let imgValues = [];
  let width;
  let height;

  const setup = () => {
    canvas = document.createElement("canvas");
    host.appendChild(canvas);

    canvas.width = host.offsetWidth;
    canvas.height = (canvas.width * img.height) / img.width;

    [width, height] = [canvas.width, canvas.height];
    ctx = canvas.getContext("2d");
  };

  const setBaseSpiral = () => {
    const diagonal = Math.sqrt(canvas.width ** 2 + canvas.height ** 2);

    spiral = Spiral({
      center: { x: canvas.width / 2, y: canvas.height / 2 },
      diameter: diagonal,
    });

    getImageValues();
  };

  const getImageValues = () => {
    const imgCanvas = document.createElement("canvas");
    imgCanvas.width = width;
    imgCanvas.height = height;
    const imgCtx = imgCanvas.getContext("2d");
    imgCtx.drawImage(img, 0, 0, width, height);

    imgValues = spiral.points.map((point) => {
      const { x, y } = point;
      const rgb = imgCtx.getImageData(x, y, 1, 1).data;
      return (rgb[0] + rgb[1] + rgb[2]) / 3 / 255;
    });

    return imgValues;
  };

  const draw = () => {
    spiral.displace(imgValues, 5);
    spiral.points.forEach((point) => {
      ctx.lineTo(point.x, point.y);
    });
  };

  const run = (_host, _img) => {
    host = _host;
    img = _img;
    setup();
    setBaseSpiral();
    draw();
    // ctx.closePath();
    // ctx.fill();
    ctx.stroke();
  };

  return {
    run,
  };
})();

export default SingleStroke;
