import spiralPath from './makeSpiralPath';

const newSpiral = ({
  center = { x: 0, y: 0 },
  diameter = 500,
  vertexDensity = 0.5,
  coilsGap = 10,
}) => {
  const path = spiralPath({
    center,
    diameter,
    vertexDensity,
    coilsGap,
  });

  return {
    get path() {
      return path;
    },
  };
};

export default newSpiral;
