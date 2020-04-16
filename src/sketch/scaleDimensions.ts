export default (
  src: { w: number; h: number },
  trgt: { w: number; h: number },
): [number, number] => {
  const aspectRatio = src.w / src.h;

  if (aspectRatio > 1) {
    src.w = trgt.w;
    src.h = src.w / aspectRatio;
  } else {
    src.w = trgt.h;
    src.w = src.h * aspectRatio;
  }

  return [src.w, src.h];
};
