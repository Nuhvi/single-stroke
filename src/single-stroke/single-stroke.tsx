import { Component, Prop, h, Host } from "@stencil/core";
import { createHelperCanvas } from "../utils/index";
@Component({
  tag: "single-stroke",
  styleUrl: "single-stroke.css",
})
export class SingleStroke {
  /**
   * The image src
   */
  @Prop() src: string;
  @Prop() hostId: string = `single-stroke-${Math.floor(
    Math.random() * 1000000
  )}`;

  componentDidLoad() {
    const host = document.getElementById(this.hostId);
    const helperCanvas = createHelperCanvas({ host, src: this.src });

    const pixelData = helperCanvas.getContext("2d").getImageData(20, 20, 1, 1)
      .data;

    console.log(pixelData);
  }

  render() {
    return <Host id={this.hostId}></Host>;
  }
}
