import newPoint from '../Point';

const makeSpiralPath = ({ center, diameter, vertexDensity, coilsGap }) => {
  const beta = coilsGap / (2 * Math.PI);
  const cordLength = 1 / vertexDensity;
  const spiralPath = [];

  let theta = 1;
  let r = (beta + cordLength) / 2;

  do {
    const point = newPoint({ center, length: r, angle: theta });
    spiralPath.push(point);

    theta += cordLength / r;
    r = beta * theta;
  } while (r < diameter / 2);
  return spiralPath;
};

export default makeSpiralPath;
