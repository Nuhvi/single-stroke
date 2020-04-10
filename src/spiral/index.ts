import makeSpiral from "./makeSpiral";
import Path from "../path";

const newSpiral = (params) => {
  const points = makeSpiral(params);
  return Path(points);
};

export default newSpiral;
