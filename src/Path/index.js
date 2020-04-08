import computeVertexNormals from './computeVertexNormals';

const Path = (_points = []) => {
  let _vertexNormals = [];

  const calculateNormals = () => {
    [..._points].forEach((point, i) => {
      if (i >= _points.length - 2) return;
      const vertexNormal = computeVertexNormals([
        point,
        _points[i + 1],
        _points[i + 2],
      ]);
      _vertexNormals.push(vertexNormal);
    });

    _vertexNormals = [_points[0].normalize(), ..._vertexNormals];
  };

  return {
    get points() {
      return _points;
    },
    get vertexNormals() {
      return _vertexNormals;
    },
    calculateNormals,
  };
};

export default Path;
