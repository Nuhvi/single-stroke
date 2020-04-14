import * as p5 from 'p5';

import { SpiralInterface } from '../interfaces';

export default () => {
  const isAnimationComplete: boolean = false;
  const spirals: SpiralInterface[] = [];

  const generateSpiral = () => {};

  generateSpiral();

  const renderShape = (spiral: SpiralInterface) => {};

  const setAnimationCompleteStatus = (spirals: SpiralInterface[]) => {};

  const updateShape = (spiral: SpiralInterface) => {};

  const render = () => {
    for (let i = 0; i < spirals.length; i++) {
      const spiral = spirals[i];
      renderShape(spiral);
      updateShape(spiral);
    }
    setAnimationCompleteStatus(spirals);
  };

  return Object.freeze({
    get isAnimationComplete() {
      return isAnimationComplete;
    },
    render,
  });
};
