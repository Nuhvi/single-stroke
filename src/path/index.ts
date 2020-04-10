import Point from "../point/index";

const Path = (_points: Point[] = []): Path => {
  let _vertexNormals = [];

  function calculateNormalAt(index: number): Point {
    let [p1, p2, p3] = [_points[index - 1], _points[index], _points[index + 1]];

    if (!p1 || !p3) return Point();

    return p1.clone().add(p3).divide(2).subtract(p2).normalize();
  }

  function calculateNormalsAll(): void {
    [..._points].forEach((_, i) => {
      if (i >= _points.length - 2) return;
      const vertexNormal = this.calculateNormalAt(i);

      _vertexNormals.push(vertexNormal);
    });

    _vertexNormals = [
      _points[0].clone().normalize(),
      ..._vertexNormals,
      _points.slice(-1)[0].clone().normalize(),
    ];
  }

  function offset(): void {
    _points = _vertexNormals.map((normal, i) => {
      const point = _points[i];
      return normal.add(point);
    });
  }

  function jitter({ wiggle = 50 }: { wiggle: number }) {
    this.calculateNormalsAll();

    _vertexNormals = _vertexNormals.map((normal, i) =>
      normal.multiply(Math.random() * 2 + Math.sin(i * wiggle) * 2)
    );

    this.offset();
  }

  return {
    get points() {
      return _points;
    },
    get vertexNormals() {
      return _vertexNormals;
    },
    calculateNormalAt,
    calculateNormalsAll,
    offset,
    jitter,
  };
};

export default Path;
