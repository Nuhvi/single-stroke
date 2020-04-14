import * as p5 from 'p5';

import { SpiralInterface } from './interfaces';

export default class Spiral {
  public isAnimationComplete: boolean = false;
  private p5: p5;
  private spirals: SpiralInterface[] = [];

  constructor(p5: p5) {
    this.p5 = p5;
    this.generateSpiral();
  }

  private generateSpiral() {}

  private renderShape(spiral: SpiralInterface) {}

  private setAnimationCompleteStatus(spirals: SpiralInterface[]) {}

  private updateShape(spiral: SpiralInterface) {}

  render = () => {
    for (let i = 0; i < this.spirals.length; i++) {
      const spiral = this.spirals[i];
      this.renderShape(spiral);
      this.updateShape(spiral);
    }
    this.setAnimationCompleteStatus(this.spirals);
  };
}
