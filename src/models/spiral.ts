import * as p5 from 'p5';
import { SpiralInterface } from '../interfaces';

import { copyBlur } from './helpers/index';

export default (
  p5: p5,
  img: p5.Image,
  {
    center = {
      x: 0,
      y: 0,
    },
    alpha = 0.85,
    diameter = 500,
    vertexDensity = 0.5,
    coilsGap = 8,
    speed = 40,
    acceleration = 0.5,
    wavingPower = 0.25,
    wavingSize = 20,
    displacePower = 10,
    strokeWidth = 1,
  } = {},
): SpiralInterface => {
  // base Spiral variables
  const beta = coilsGap / (2 * Math.PI);
  const cordLength = Math.min(1 / vertexDensity, coilsGap);

  // iterables
  let r = 1;
  let theta = 0;
  let steps = speed;

  // points arrays
  const points: p5.Vector[] = [p5.createVector(center.x, center.y)];
  const reversePoints: p5.Vector[] = [p5.createVector(center.x, center.y)];

  // booleans
  let isAnimationComplete: boolean = false;

  //  masks
  let centerMask: number = 0;

  // blur img for smooth displacement
  img = copyBlur(p5, img);

  // set fill color
  const color = p5.color(0, alpha * 255);

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
    const val =
      p5.map(p5.noise(i), 0, 1, -0.5, 0.5) *
      coilsGap *
      wavingPower *
      centerMask;
    point.add(val * Math.cos(theta), val * Math.sin(theta));
  };

  const displace = (point: p5.Vector): void => {
    const rgba = img.get(point.x, point.y);
    if (!Array.isArray(rgba)) return;
    const val = (rgba[0] / 255) * displacePower * centerMask;
    point.add(val * Math.cos(theta), val * Math.sin(theta));
  };

  const addStroke = (p1: p5.Vector) => {
    const rgba = img.get(p1.x, p1.y);
    if (!Array.isArray(rgba)) return;
    const val =
      p5.map(rgba[0] / 255, 0, 1, 1, 0) * (coilsGap / 2) * strokeWidth;
    const p2 = p5.createVector(p1.x, p1.y);
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    p1.add(val * cos, val * sin);
    p2.add(-val * cos, -val * sin);
    points.push(p1);
    reversePoints.push(p2);
  };

  const translateToCenter = (point: p5.Vector): void => {
    point.add(center.x, center.y);
  };

  const updateAnimationCompleteStatus = (): void => {
    const p = points[points.length - 1];
    isAnimationComplete = p.x ** 2 + p.y ** 2 > diameter ** 2;
  };

  const updateCenterMask = (): void => {
    if (centerMask < 1) centerMask = Math.min(r / (coilsGap * 2), 1);
  };

  const calculateNextPoint = (): p5.Vector => {
    let point = calculateBaseSpiralPoint();
    translateToCenter(point);
    addWaving(point);
    displace(point);
    addStroke(point);

    points.push(point);
    return point;
  };

  const renderAll = () => {
    p5.background('#fffffd');
    p5.noStroke();
    p5.fill(0, alpha * 255);
    p5.beginShape();
    points.forEach((p) => {
      p5.vertex(p.x, p.y);
    });
    reversePoints.reverse().forEach((p) => {
      p5.vertex(p.x, p.y);
    });
    p5.endShape(p5.CLOSE);
  };

  const renderLastSegment = () => {
    const p1 = points[points.length - 3];
    const p2 = points[points.length - 2];
    const p3 = reversePoints[reversePoints.length - 2];
    const p4 = reversePoints[reversePoints.length - 1];
    p5.fill(color);
    p5.noStroke();
    p5.beginShape();
    p5.vertex(p1.x, p1.y);
    p5.vertex(p2.x, p2.y);
    p5.vertex(p4.x, p4.y);
    p5.vertex(p3.x, p3.y);
    p5.endShape(p5.CLOSE);
    // Hide the gap with a stroke
    p5.stroke((1 - alpha) * 255);
    p5.line(p1.x, p1.y, p3.x, p3.y);
  };

  const growStepsAtAtime = () => {
    let s = steps;
    do {
      calculateNextPoint();
      renderLastSegment();
      updateCenterMask();
      s -= 1;
    } while (s > 0);
    steps *= 1 + acceleration / 10;
  };

  const grow = () => {
    growStepsAtAtime();
    updateAnimationCompleteStatus();
    // if (isAnimationComplete) renderAll();
  };

  return Object.freeze({
    get isAnimationComplete() {
      return isAnimationComplete;
    },
    grow,
  });
};
