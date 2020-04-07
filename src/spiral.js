// Props

const RESOLUTION = 200;
const radialSteps = RESOLUTION / 10; // Even & > 8
const POLAR_TURNS = 20;

// derived

const angleIncrement = (2 * Math.PI) / radialSteps;

const calculateSpiralPath = (WIDTH, HEIGHT) => {
  const centerX = WIDTH / 2;
  const centerY = HEIGHT / 2;
  const diagonalLength = Math.sqrt(WIDTH ** 2 + HEIGHT ** 2);
  const polatGrowth = diagonalLength / ((POLAR_TURNS * radialSteps) / 2);

  let angle = angleIncrement;
  let r;

  const spiralVerticies = [];

  do {
    r = polatGrowth * angle;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    spiralVerticies.push([x, y]);

    angle += angleIncrement;
  } while (r < diagonalLength / 2);

  return spiralVerticies;
};

export default calculateSpiralPath;
