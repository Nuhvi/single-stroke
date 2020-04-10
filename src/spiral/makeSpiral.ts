import newPoint from "../point";

const makeSpiralPath = ({
  center = { x: 0, y: 0 },
  diameter = 500,
  vertexDensity = 0.5,
  coilsGap = 10,
}) => {
  const beta = coilsGap / (2 * Math.PI);
  const cordLength = 1 / vertexDensity;
  const spiralPath = [];

  let r = 0;
  let theta = 0;

  do {
    // Smooth spiral beggining https://stackoverflow.com/a/13901170/12278935
    theta +=
      (-2 * r + Math.sqrt(4 * r * r + 8 * beta * cordLength)) / (2 * beta);
    r = beta * theta;
    const point = newPoint({ center, length: r, angle: theta });
    spiralPath.push(point);
  } while (r < diameter / 2);

  return spiralPath;
};

export default makeSpiralPath;
