export const scaleNeeded = (
  src: { w: number; h: number },
  trgt: { w: number; h: number },
): number => {
  let scale = 1;
  const srcAspectRatio = src.w / src.h;
  const trgtAspectRatio = trgt.w / trgt.h;

  if (srcAspectRatio >= trgtAspectRatio) {
    scale = trgt.w / src.w;
  } else {
    scale = trgt.h / src.h;
  }

  return scale;
};
