export const deg2Radian = (angle) => (angle / 180) * Math.PI;

export const sanitizeVector = (vec) => {
  if (typeof vec === "number") return { x: vec, y: vec };
  return { x: vec.x, y: vec.y };
};

export const hypotenuseLength = (x, y) => {
  return Math.sqrt(x ** 2 + y ** 2);
};

export const createHelperCanvas = ({ host, src }) => {
  console.log(host);
  const img = document.createElement("img");
  const canvas = document.createElement("canvas");
  img.src = src;
  img.setAttribute("crossOrigin", "");

  canvas.getContext("2d").drawImage(img, 0, 0);

  return canvas;
};
