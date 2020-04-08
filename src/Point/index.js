const newPoint = (
  params = {
    center: { x: 0, y: 0 },
    length: 0,
    angle: 0,
  },
) => {
  const { center, length, angle } = params;

  let _x = center.x + length * Math.cos(angle);
  let _y = center.y + length * Math.sin(angle);

  const move = (vector = { x: 0, y: 0 }) => {
    _x += vector.x;
    _y += vector.x;
  };

  return {
    get x() {
      return _x;
    },
    get y() {
      return _y;
    },
    move,
  };
};

export default newPoint;
