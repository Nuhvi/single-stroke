export const deg2Radian = (angle) => (angle / 180) * Math.PI;

export const sanitizeVector = (vec) => {
  if (typeof vec === "number") return { x: vec, y: vec };
  return { x: vec.x, y: vec.y };
};

export const hypotenuseLength = (x, y) => {
  return Math.sqrt(x ** 2 + y ** 2);
};

export const blur = (arr, power = 3) => {
  if (power === 0) return arr;
  const res = [];
  arr.forEach((_, index) => {
    let val = 0;
    for (let i = -1; i <= power - 1; i += 1) {
      val += arr[index + i] || 0;
    }

    res.push(val / power);
  });
  return res;
};
