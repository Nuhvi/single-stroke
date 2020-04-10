interface Vector {
  x: number;
  y: number;
}

interface Point {
  x: number;
  y: number;
  add: Function;
  subtract: Function;
  multiply: Function;
  divide: Function;
  clone: Function;
  normalize: Function;
  rotate: Function;
}

interface Path {
  points: Point[];
  vertexNormals: Point[];
  calculateNormalAt: Function;
  calculateNormalsAll: Function;
  offset: Function;
  jitter: Function;
}
