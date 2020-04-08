export const offsetPath = ({ path, offset = 20, direction = 1 }) => {
  if (typeof offset === 'number') {
    return path.map((point) => point);
  }

  return path.map((point, i) => {
    point.x += offset[i][0] * direction;
    point.y += offset[i][1] * direction;
    return point;
  });
};

const makeStroke = (path) => {
  const postiveOffsetedPath = offsetPath({ path });
  const negativeOffsetedPath = offsetPath({ path, direction: -1 });

  const combinedPath = [
    ...postiveOffsetedPath,
    ...negativeOffsetedPath.reverse(),
  ];

  return combinedPath;
};

export default makeStroke;
