export const scaleDimensions = (
  src: { w: number; h: number },
  trgt: { w: number; h: number },
): [number, number] => {
  const aspectRatio = src.w / src.h;

  if (aspectRatio > 1) {
    src.w = trgt.w;
    src.h = src.w / aspectRatio;
  } else if (aspectRatio < 1) {
    src.w = trgt.h;
    src.w = src.h * aspectRatio;
  } else if (aspectRatio > 0) {
    const smallSide = Math.min(trgt.w, trgt.h);
    src.w = smallSide;
    src.h = smallSide;
  }

  return [src.w, src.h];
};

export const grayscale = ([r, g, b, a]: number[]): number => {
  return (r + g + b) / 3 / 255;
};
