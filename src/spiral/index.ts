import * as p5 from 'p5';

import { SpiralInterface } from '../interfaces';

export default (
  {
    center = {
      x: 0,
      y: 0,
    },
    diameter = 500,
    vertexDensity = 0.001,
    coilsGap = 100,
  } = {},
  p5: p5,
) => {
  const points: p5.Vector[] = [p5.createVector(center.x, center.y)];

  let isAnimationComplete: boolean = false;
  // To control masking the center
  let centerMask: number = 1;

  const beta = coilsGap / (2 * Math.PI);
  const cordLength = Math.min(1 / vertexDensity, coilsGap);
  let r = 1;
  let theta = 0;

  const updateAnimationCompleteStatus = (): void => {
    const p = points[points.length - 1];
    isAnimationComplete = p.x ** 2 + p.y ** 2 > diameter ** 2;
  };

  const updateCenterMask = (): void => {
    if (centerMask > 0) centerMask = Math.max(1 - r / (coilsGap * 2), 0);
  };

  const calculateBaseSpiralPoint = () => {
    const smoothCenterModifier = (centerMask * coilsGap) / 2 / r;

    theta += centerMask ? cordLength / coilsGap / 2 : cordLength / r;
    r = beta * theta;

    let x = center.x + r * Math.cos(theta);
    let y = center.y + r * Math.sin(theta);
    return p5.createVector(x, y);
  };

  const renderLastSegment = () => {
    // p5.strokeWeight(centerMask);
    const p1 = points[points.length - 2];
    const p2 = points[points.length - 1];
    p5.line(p1.x, p1.y, p2.x, p2.y);
  };

  const calculateNextPoint = (): p5.Vector => {
    const point = calculateBaseSpiralPoint();
    points.push(point);

    return point;
  };

  const render = () => {
    calculateNextPoint();
    renderLastSegment();
    updateCenterMask();
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
