import { Component, Prop, h } from "@stencil/core";
import createCanvas from "../SingleStroke/createCanvas.js";

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
    return <div></div>;
  }
}
