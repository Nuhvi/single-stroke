// copied some Vector.js functions for some of the vector manipulation
// https://github.com/maxkueng/victor/blob/master/index.js
// And Paper.js
// https://github.com/paperjs/paper.js/blob/9206135a1f9fed1241ee8c9964c8b13bb0e57743/src/basic/Point.js

const newPoint = ({ x, y, center = { x: 0, y: 0 }, length = 0, angle = 0 }) => {
  let _x;
  let _y;

  if (x && y) {
    _x = x;
    _y = y;
  } else {
    _x = center.x + length * Math.cos(angle);
    _y = center.y + length * Math.sin(angle);
  }

  const deg2Radian = (angle) => (angle / 180) * Math.PI;
  const sanitizeVector = (vec) => {
    if (typeof vec === 'number') return { x: vec, y: vec };
    return vec;
  };

  function add(vector = { x: 0, y: 0 }) {
    vector = sanitizeVector(vector);
    _x += vector.x;
    _y += vector.y;

    return this;
  }

  function subtract(vector) {
    this.add({ x: -vector.x, y: -vector.y });
    return this;
  }

  function multiply(vector = { x: 1, y: 1 }) {
    vector = sanitizeVector(vector);
    _x *= vector.x;
    _y *= vector.y;

    return this;
  }

  function divide(vector) {
    vector = sanitizeVector(vector);
    this.multiply({ x: 1 / vector.x, y: 1 / vector.y });

    return this;
  }

  function rotate({ center = { x: 0, y: 0 }, angle = 90 }) {
    if (angle === 0) return this;
    angle = deg2Radian(angle);

    _x -= center.x;
    _y -= center.y;

    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    const newX = _x * cos - _y * sin;
    const newY = _x * sin + _y * cos;

    _x = newX + center.x;
    _y = newY + center.y;

    return this;
  }

  function calcLength() {
    return Math.sqrt(_x ** 2 + _y ** 2);
  }

  function normalize() {
    length = this.calcLength();

    this.divide(length);
    return this;
  }

  function clone() {
    const clone = newPoint({ x: this.x, y: this.y });

    return clone;
  }

  return {
    get x() {
      return _x;
    },
    get y() {
      return _y;
    },
    add,
    subtract,
    multiply,
    divide,
    rotate,
    calcLength,
    normalize,
    clone,
  };
};

export default newPoint;
