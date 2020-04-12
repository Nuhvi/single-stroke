import Spiral from "../spiral";
import { blur } from "../utils";

const SingleStroke = (() => {
  const setup = ({ canvas, img }) => {
    const host = canvas.parentElement;

    canvas.width = host.clientWidth;
    canvas.height = (host.clientWidth * img.height) / img.width;

    const [width, height] = [canvas.width, canvas.height];

    return [canvas.getContext("2d"), width, height];
  };

  const setBaseSpiral = ({ width, height }) => {
    const diagonal = Math.sqrt(width ** 2 + height ** 2);

    return Spiral({
      center: { x: width / 2, y: height / 2 },
      diameter: diagonal,
    });
  };

  const getImageValues = ({ canvas, img, spiral }) => {
    const imgCanvas = document.createElement("canvas");
    imgCanvas.width = canvas.width;
    imgCanvas.height = canvas.height;
    const ctx = imgCanvas.getContext("2d");
    ctx.drawImage(img, 0, 0, imgCanvas.width, imgCanvas.height);

    return spiral.points.map((point) => {
      const { x, y } = point;
      const rgb = ctx.getImageData(x, y, 1, 1).data;
      return (rgb[0] + rgb[1] + rgb[2]) / 3 / 255;
    });
  };

  const drawSegment = (ctx, points, halfLen, lastStep, nextStep) => {
    ctx.moveTo(
      points[halfLen + lastStep - 1].x,
      points[halfLen + lastStep - 1].y
    );

    for (let i = lastStep; i <= nextStep; i++) {
      ctx.lineTo(points[halfLen + i].x, points[halfLen + i].y);
    }
    for (let i = nextStep; i >= lastStep; i--) {
      ctx.lineTo(points[halfLen - i].x, points[halfLen - i].y);
    }

    ctx.closePath();
    ctx.fill();
  };

  const animate = (
    ctx,
    points,
    halfLen,
    lastStep = 0,
    nextStep = 0,
    accelerating = 0.1
  ) => {
    drawSegment(ctx, points, halfLen, lastStep, nextStep);

    lastStep = nextStep;
    nextStep += Math.ceil(lastStep * accelerating + 1);

    if (nextStep < halfLen) {
      requestAnimationFrame(() => {
        animate(ctx, points, halfLen, lastStep, nextStep, accelerating);
      });
    } else {
      drawSegment(ctx, points, halfLen, lastStep, halfLen - 1);
    }
  };

  const draw = ({ spiral, imgValues }) => {
    const map = imgValues;
    spiral
      .displace({ map: blur(imgValues, 5), strength: 10 })
      .createStroke({ map, thickness: 10 });
  };

  return {
    run: (canvas, img) => {
      console.time("setup");
      const [ctx, width, height] = setup({ canvas, img });
      console.timeEnd("setup");
      console.time("create spiral");
      const spiral = setBaseSpiral({ width, height });
      console.timeEnd("create spiral");
      console.time("read Image data");
      let imgValues = getImageValues({ canvas, img, spiral });
      console.timeEnd("read Image data");
      console.time("modify spiral");
      draw({ spiral, imgValues });
      console.timeEnd("modify spiral");
      console.time("draw canvas");
      animate(ctx, spiral.points, Math.floor(spiral.points.length / 2));
      console.timeEnd("draw canvas");
    },
  };
})();

export default SingleStroke;
