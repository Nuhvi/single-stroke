// Props

const VERTIX_DENSITY = 0.05; // vertix per px
const COILS_GAP = 10; // pixels
const COILS = 200;

const calculateSpiralPath = (WIDTH, HEIGHT) => {
  const centerX = WIDTH / 2;
  const centerY = HEIGHT / 2;
  const diagonalLength = Math.sqrt(WIDTH ** 2 + HEIGHT ** 2);
  const b = COILS_GAP / (2 * Math.PI);
  const cordLenCoef = 0.00000461765;
  const cordLength = (cordLenCoef * diagonalLength * COILS) / VERTIX_DENSITY;

  // cordL = whole / (density)

  let theta = 1;
  let r = b * 2;

  const spiralVerticies = [];

  do {
    const x = centerX + r * Math.cos(theta);
    const y = centerY + r * Math.sin(theta);

    spiralVerticies.push([x, y]);

    theta += cordLength / r;
    r = b * theta;
  } while (r < diagonalLength / 2);

  return { spiralVerticies };
};

export default calculateSpiralPath;
