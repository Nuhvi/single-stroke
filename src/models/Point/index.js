const newPoint = ({ center = { x: 0, y: 0 }, length = 0, angle = 0 }) => {
  const x = center.x + length * Math.cos(angle);
  const y = center.y + length * Math.sin(angle);

  return { x, y };
};

export default newPoint;
