export const scaleNeeded = (
  src: { w: number; h: number },
  trgt: { w: number; h: number },
): number => {
  let scale = 1;
  const aspectRatio = src.w / src.h;

  if (aspectRatio > 1) {
    scale = trgt.w / src.w;
  } else if (aspectRatio < 1) {
    scale = trgt.h / src.h;
  } else if (aspectRatio === 1) {
    const smallSide = Math.min(trgt.w, trgt.h, src.w);
    scale = smallSide / src.w;
  }

  return scale;
};
