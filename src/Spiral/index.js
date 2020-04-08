import makeSpiral from './makeSpiral';
import Path from '../Path';

const newSpiral = (params) => {
  const points = makeSpiral(params);
  return Path(points);
};

export default newSpiral;
