export const offsetPath = ({ path, offset = 1, direction = 1 }) => {
  if (typeof offset === 'number') {
    offset = path.map(() => [offset, offset]);
  }

  return path.map(([x, y], i) => [
    x + offset[i][0] * direction,
    y + offset[i][1] * direction,
  ]);
};

const makeStroke = ({ path }) => {
  const postiveOffsetedPath = offsetPath({ path });
  const negativeOffsetedPath = offsetPath({ path, direction: -1 });

  const combinedPath = [
    ...postiveOffsetedPath,
    ...negativeOffsetedPath.reverse(),
  ];

  return combinedPath;
};

export default makeStroke;
