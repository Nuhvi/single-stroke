export default ([p1, p2, p3]) => {
  [p1, p2, p3] = [p1.clone(), p2.clone(), p3.clone()];

  const vertexNormal = p1.add(p3).divide(2).subtract(p2).normalize();

  return vertexNormal;
};
