import * as p5 from 'p5';

import { SpiralInterface } from './interfaces';

export default (
  {
    center = {
      x: 0,
      y: 0,
    },
    diameter = 500,
    vertexDensity = 0.5,
    coilsGap = 10,
    acceleration = 0.1,
    wavingPower = 0.8,
    wavingSize = 40,
  } = {},
  p5: p5,
) => {
  // base Spiral variables
  const beta = coilsGap / (2 * Math.PI);
  const cordLength = Math.min(1 / vertexDensity, coilsGap);

  // iterables
  let r = 1;
  let theta = 0;
  let steps = 1;

  // points arrays
  const points: p5.Vector[] = [p5.createVector(center.x, center.y)];

  // booleans
  let isAnimationComplete: boolean = false;

  //  masks
  let centerMask: number = 0;

  const updateAnimationCompleteStatus = (): void => {
    const p = points[points.length - 1];
    isAnimationComplete = p.x ** 2 + p.y ** 2 > diameter ** 2;
  };

  const updateCenterMask = (): void => {
    if (centerMask < 1) centerMask = Math.min(r / (coilsGap * 2), 1);
  };

  const renderLastSegment = () => {
    const p1 = points[points.length - 2];
    const p2 = points[points.length - 1];
    p5.line(p1.x, p1.y, p2.x, p2.y);
  };

  const calculateBaseSpiralPoint = () => {
    // Use center mask to smooth the center coil
    theta += centerMask < 1 ? cordLength / coilsGap : cordLength / r;
    r = beta * theta;

    let x = r * Math.cos(theta);
    let y = r * Math.sin(theta);
    return p5.createVector(x, y);
  };

  const addWaving = (point: p5.Vector): void => {
    const i = points.length / wavingSize;
    const waving =
      p5.map(p5.noise(i), 0, 1, -0.5, 0.5) *
      coilsGap *
      wavingPower *
      centerMask;
    point.add(waving * Math.cos(theta), waving * Math.sin(theta));
  };

  const translateToCenter = (point: p5.Vector): void => {
    point.add(center.x, center.y);
  };

  const calculateNextPoint = (): p5.Vector => {
    let point = calculateBaseSpiralPoint();
    addWaving(point);

    translateToCenter(point);

    points.push(point);
    return point;
  };

  const renderStepsAtAtime = () => {
    let s = steps;
    do {
      calculateNextPoint();
      renderLastSegment();
      updateCenterMask();
      s -= 1;
    } while (s > 0);
    steps *= 1 + acceleration;
  };

  const render = () => {
    renderStepsAtAtime();
    updateAnimationCompleteStatus();
    if (isAnimationComplete) p5.noLoop();
  };

  return Object.freeze({
    get isAnimationComplete() {
      return isAnimationComplete;
    },
    render,
  });
};
