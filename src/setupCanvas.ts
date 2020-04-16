import * as p5 from 'p5';

export default (p5: p5, app: HTMLElement): number[] => {
  let width = app?.offsetWidth;
  let height = app?.offsetHeight;

  const canvas = p5.createCanvas(width, height);

  return [width, height];
};
