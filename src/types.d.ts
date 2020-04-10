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
  displace: Function;
  getNormalAt: Function;
}
