import Point from "../point/index";

const Path = (points: Point[] = []) => {
  function getNormalAt(index: number): Point {
    let [p1, p2, p3] = [points[index - 1], points[index], points[index + 1]];
    if (!p1 || !p3) return Point();

    const v1 = p2.clone().subtract(p1);
    const v2 = p3.clone().subtract(p2);

    return v1.add(v2).normalize().rotate({ angle: -90 });
  }

  function displace({ map, strength = 1 }): Path {
    const vectors = points.map((_, index) => {
      const value = map[index] * strength;
      return getNormalAt(index).multiply(value);
    });

    points.forEach((point, index) => {
      point.add(vectors[index]);
    });
    return this;
  }

  function createStroke({ map, thickness, startRampFactor = 0.2 }): Path {
    const vectors = points.map((_, index) => {
      const startRamp = Math.min(index * startRampFactor, 1);
      let value = (thickness / 2) * (1 - map[index]) * startRamp;
      return getNormalAt(index).multiply(value);
    });

    const copiedPoints = [];
    points.forEach((point, index) => {
      const vector = vectors[index];
      copiedPoints.push(point.clone().add(vector));
      copiedPoints.unshift(point.clone().subtract(vector));
    });
    points = copiedPoints;
    return this;
  }

  return {
    get points() {
      return points;
    },
    getNormalAt,
    displace,
    createStroke,
  };
};

export default Path;
