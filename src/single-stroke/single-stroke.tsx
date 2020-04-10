import { Component, Prop, h } from "@stencil/core";
import SS from "../SingleStroke";

@Component({
  tag: "single-stroke",
  styleUrl: "single-stroke.css",
  shadow: true,
})
export class SingleStroke {
  /**
   * The image src
   */
  @Prop() src: string;

  render() {
    SS.start(this.src);

    return <div></div>;
  }
}
