// Props

const VERTIX_DENSITY = 0.1; // vertices per pixel
const COILS_GAP = 10; // pixels

const calculateSpiralPath = ({ diameter }) => {
  const beta = COILS_GAP / (2 * Math.PI);
  const cordLength = 1 / VERTIX_DENSITY;
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

  return { spiralVerticies };
};

export default calculateSpiralPath;
