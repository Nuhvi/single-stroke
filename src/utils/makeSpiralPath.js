import newPoint from '../models/Point.js';

const makeSpiralPath = ({
  diameter = 500,
  vertexDensity = 0.5,
  coilsGap = 10,
}) => {
  const beta = coilsGap / (2 * Math.PI);
  const cordLength = 1 / vertexDensity;
  const spiralPath = [];

  let theta = 1;
  let r = beta * 2;

  do {
    spiralPath.push(
      newPoint({
        x: r * Math.cos(theta),
        y: r * Math.sin(theta),
      }),
    );

    theta += cordLength / r;
    r = beta * theta;
  } while (r < diameter / 2);
  return spiralPath;
};

export default makeSpiralPath;
