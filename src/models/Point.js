const newPoint = ({ length, angle }) => {
  const x = length * Math.cos(angle);
  const y = length * Math.sin(angle);

  return {
    get x() {
      return x;
    },
    get y() {
      return y;
    },
  };
};

export default newPoint;
