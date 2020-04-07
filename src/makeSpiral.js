const makeSpiral = ({ diameter = 500, vertexDensity = 0.5, coilsGap = 10 }) => {
  const beta = coilsGap / (2 * Math.PI);
  const cordLength = 1 / vertexDensity;
  const spiralVerticies = [];

  let theta = 1;
  let r = beta * 2;

  do {
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);

    spiralVerticies.push([x, y]);

    theta += cordLength / r;
    r = beta * theta;
  } while (r < diameter / 2);
  return spiralVerticies;
};

export default makeSpiral;
