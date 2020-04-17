import * as p5 from 'p5';

export const copyBlur = (p5: p5, img: p5.Image) => {
  const blurredImg = p5.createImage(img.width, img.height);

  blurredImg.copy(
    img,
    0,
    0,
    img.width,
    img.height,
    0,
    0,
    img.width,
    img.height,
  );

  blurredImg.filter(p5.BLUR, 3);
  return blurredImg;
};
