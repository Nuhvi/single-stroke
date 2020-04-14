import * as p5 from "p5";

import { ShapeInterface } from "./interfaces";

export default class Shapes {
  public isAnimationComplete: boolean = false;
  private p5: p5;
  private shapes: ShapeInterface[] = [];

  constructor(p5: p5) {
    this.p5 = p5;
    this.generateShapes();
  }

  private generateShapes() {}

  private renderShape(shape: ShapeInterface) {}

  private setAnimationCompleteStatus(shapes: ShapeInterface[]) {}

  private updateShape(shape: ShapeInterface) {}

  render = () => {
    for (let i = 0; i < this.shapes.length; i++) {
      const shape = this.shapes[i];
      this.renderShape(shape);
      this.updateShape(shape);
    }
    this.setAnimationCompleteStatus(this.shapes);
  };
}
