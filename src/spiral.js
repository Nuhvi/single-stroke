// Props

const PATH_SUBDIVISION = 200; // Chords density
const COILS = 100;

const calculateSpiralPath = (WIDTH, HEIGHT) => {
  const centerX = WIDTH / 2;
  const centerY = HEIGHT / 2;
  const diagonalLength = Math.sqrt(WIDTH ** 2 + HEIGHT ** 2);
  const polarStep = diagonalLength / (COILS * 2 * Math.PI);
  const cordLength = diagonalLength / PATH_SUBDIVISION;

  let theta = 1;
  let polarDistance = polarStep * 2;

  const spiralVerticies = [];

  do {
    const x = centerX + polarDistance * Math.cos(theta);
    const y = centerY + polarDistance * Math.sin(theta);

    spiralVerticies.push([x, y]);

    theta += cordLength / polarDistance;
    polarDistance = polarStep * theta;
  } while (polarDistance < diagonalLength / 2);

  console.log({
    diagonalLength,
    chordsNO: spiralVerticies.length,
  });

  return spiralVerticies;
};

export default calculateSpiralPath;
