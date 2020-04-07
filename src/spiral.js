// Props

const VERTIX_DENSITY = 0.05; // vertix per px
const COILS = 200;

const calculateSpiralPath = (WIDTH, HEIGHT) => {
  const centerX = WIDTH / 2;
  const centerY = HEIGHT / 2;
  const diagonalLength = Math.sqrt(WIDTH ** 2 + HEIGHT ** 2);
  const strokeSpacing = diagonalLength / (COILS * 2 * Math.PI);
  const cordLenCoef = 0.00000461765;
  const cordLength = (cordLenCoef * diagonalLength * COILS) / VERTIX_DENSITY;

  // cordL = whole / (density)

  let theta = 1;
  let polarDistance = strokeSpacing * 2;

  const spiralVerticies = [];

  do {
    const x = centerX + polarDistance * Math.cos(theta);
    const y = centerY + polarDistance * Math.sin(theta);

    spiralVerticies.push([x, y]);

    theta += cordLength / polarDistance;
    polarDistance = strokeSpacing * theta;
  } while (polarDistance < diagonalLength / 2);

  return { spiralVerticies, strokeSpacing };
};

export default calculateSpiralPath;
