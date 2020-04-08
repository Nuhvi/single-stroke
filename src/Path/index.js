import computeVertexNormals from './computeVertexNormals';

const Path = (_points = []) => {
  let _vertexNormals = [];

  function calculateNormals() {
    [..._points].forEach((point, i) => {
      if (i >= _points.length - 2) return;
      const vertexNormal = computeVertexNormals([
        point,
        _points[i + 1],
        _points[i + 2],
      ]);
      _vertexNormals.push(vertexNormal);
    });

    _vertexNormals = [
      _points[0].clone().normalize(),
      ..._vertexNormals,
      _points.slice(-1)[0].clone().normalize(),
    ];
  }

  function offset() {
    _points = _vertexNormals.map((normal, i) => {
      const point = _points[i];
      return normal.add(point);
    });
  }

  function jitter({ wiggle = 50 }) {
    this.calculateNormals();

    _vertexNormals = _vertexNormals.map((normal, i) =>
      normal.multiply(Math.random() * 2 + Math.sin(i * wiggle) * 2),
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
    calculateNormals,
    offset,
    jitter,
  };
};

export default Path;
