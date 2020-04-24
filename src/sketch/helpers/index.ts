export const scaleNeeded = (
  src: { w: number; h: number },
  trgt: { w: number; h: number }
): number => {
  const wr = trgt.w / src.w;
  const hr = trgt.h / src.h;

  return Math.min(wr, hr);
};
