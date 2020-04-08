import spiralPath from './utils/spiral/makeSpiralPath.js';
import makeStroke from './utils/spiral/makeStroke.js';

const newSpiral = ({ diameter = 500, vertexDensity = 0.5, coilsGap = 10 }) => {
  let path = spiralPath({ diameter, vertexDensity, coilsGap });

  const moveTo = (vector) => {
    path = path.map((point) => point.moveTo(vector));
  };

  return {
    get path() {
      return path;
    },
    makeStroke,
    moveTo,
  };
};

export default newSpiral;
