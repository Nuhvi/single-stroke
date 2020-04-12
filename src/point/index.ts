// copied some Vector.js functions for some of the vector manipulation
// https://github.com/maxkueng/victor/blob/master/index.js
// And Paper.js
// https://github.com/paperjs/paper.js/blob/9206135a1f9fed1241ee8c9964c8b13bb0e57743/src/basic/Point.js

import { sanitizeVector, deg2Radian, hypotenuseLength } from "../utils";

const Point = ({
  center = { x: 0, y: 0 },
  length = 0,
  angle = 0,
} = {}): Point => {
  let x = center.x + length * Math.cos(angle);
  let y = center.y + length * Math.sin(angle);

  function add(vector: Vector = { x: 0, y: 0 }) {
    vector = sanitizeVector(vector);
    x += vector.x;
    y += vector.y;

    return this;
  }

  function subtract(vector: Vector) {
    vector = sanitizeVector(vector);
    this.add({ x: -vector.x, y: -vector.y });
    return this;
  }

  function multiply(vector: Vector = { x: 1, y: 1 }) {
    vector = sanitizeVector(vector);
    x *= vector.x;
    y *= vector.y;

    return this;
  }

  function divide(vector: Vector) {
    vector = sanitizeVector(vector);
    this.multiply({ x: 1 / vector.x, y: 1 / vector.y });

    return this;
  }

  function rotate({ center = { x: 0, y: 0 }, angle = 90 }) {
    if (angle === 0) return this;
    angle = deg2Radian(angle);

    x -= center.x;
    y -= center.y;

    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    const newX = x * cos - y * sin;
    const newY = x * sin + y * cos;

    x = newX + center.x;
    y = newY + center.y;

    return this;
  }

  function normalize() {
    length = hypotenuseLength(x, y);

    this.divide(length);
    return this;
  }

  function clone() {
    const clone = Point({ center: { x, y } });

    return clone;
  }

  return Object.freeze({
    get x() {
      return x;
    },
    get y() {
      return y;
    },
    add,
    subtract,
    multiply,
    divide,
    clone,
    normalize,
    rotate,
  });
};

export default Point;
