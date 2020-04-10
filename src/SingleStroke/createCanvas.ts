const setCanvasDimensions = (canvas, img) => {
  let width;
  let height;
  if (canvas.attributes.height) {
    const { offsetHeight } = canvas;
    const aspectRatio = img.width / img.height;
    [width, height] = [aspectRatio * offsetHeight, offsetHeight];
  } else {
    const { offsetWidth } = canvas;
    const aspectRatio = img.height / img.width;
    [width, height] = [offsetWidth, aspectRatio * offsetWidth];
  }
  [canvas.width, canvas.height] = [width, height];
  return canvas;
};

const loadImage = (imageSrc) => {
  const img = document.createElement("img");
  img.style.display = "none";
  img.src = imageSrc;
  document.body.appendChild(img);

  return img;
};

export default (src) => {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  const img = loadImage(src);

  setCanvasDimensions(canvas, img);

  return canvas;
};