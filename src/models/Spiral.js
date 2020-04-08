import spiralPath from '../utils/makeSpiralPath.js';
import makeStroke from '../utils/makeStroke.js';

const newSpiral = ({ diameter = 500, vertexDensity = 0.5, coilsGap = 10 }) => {
  let path = spiralPath({ diameter, vertexDensity, coilsGap });

  return {
    get path() {
      return path;
    },
    makeStroke() {
      path = makeStroke(path);
    },
  };
};

export default newSpiral;
