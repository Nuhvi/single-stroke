import Point from "../point/index";

const Path = (_points: Point[] = []): Path => {
  function getNormalAt(index: number): Point {
    let [p1, p2, p3] = [_points[index - 1], _points[index], _points[index + 1]];

    if (!p1 || !p3) return Point();

    return p1.clone().add(p3).divide(2).subtract(p2).normalize().multiply(-1);
  }

  function displace(values, power) {
    const displacements = _points.map((_, index) => {
      const value = values[index];
      return getNormalAt(index).multiply(value * power);
    });

    _points.forEach((point, index) => {
      point.add(displacements[index]);
    });
  }

  return {
    get points() {
      return _points;
    },
    getNormalAt,
    displace,
  };
};

export default Path;
