import makeSpiral from "./makeSpiral";
import Path from "../path";

const Spiral = (params): Path => {
  const points = makeSpiral(params);
  return Path(points);
};

export default Spiral;
