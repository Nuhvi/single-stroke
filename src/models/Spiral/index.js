import makeSpiral from './makeSpiral';
import Path from '../Path';

const newSpiral = ({
  center = { x: 0, y: 0 },
  diameter = 500,
  vertexDensity = 0.5,
  coilsGap = 10,
}) => {
  const spiral = Path();
  spiral.points = makeSpiral({
    center,
    diameter,
    vertexDensity,
    coilsGap,
  });

  return spiral;
};

export default newSpiral;
