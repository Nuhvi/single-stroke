const newPoint = ({ center = { x: 0, y: 0 }, length = 0, angle = 0 }) => {
  const x = center.x + length * Math.cos(angle);
  const y = center.y + length * Math.sin(angle);

  return {
    get x() {
      return x;
    },
    get y() {
      return y;
    },
    moveTo(vector) {
      if (vector.x === 0 && vector.y === 0) return this;
      const center = { x: this.x + vector.x, y: this.y + vector.y };
      return newPoint({
        center,
      });
    },
  };
};

export default newPoint;
