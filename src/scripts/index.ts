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

  const draw = ({ ctx, spiral, imgValues }) => {
    const map = imgValues;
    spiral
      .displace({ map: blur(imgValues, 5), strength: 10 })
      .createStroke({ map, thickness: 10 })
      .points.forEach((point) => {
        ctx.lineTo(point.x, point.y);
      });
  };

  return {
    run: (canvas, img) => {
      const [ctx, width, height] = setup({ canvas, img });
      const spiral = setBaseSpiral({ width, height });
      let imgValues = getImageValues({ canvas, img, spiral });
      draw({ ctx, spiral, imgValues });
      ctx.closePath();
      ctx.fill();
      // ctx.stroke();
    },
  };
})();

export default SingleStroke;
