import { Component, Prop, h, getAssetPath, Host, State } from "@stencil/core";
import singleStoke from "../scripts/index";
@Component({
  tag: "single-stroke",
  styleUrl: "single-stroke.css",
  assetsDirs: ["assets"],
})
export class SingleStroke {
  /**
   * Unique Id
   */
  @Prop() uid: string = `single-stroke-${Math.floor(Math.random() * 1000000)}`;

  @State() imageLoaded = false;

  componentDidLoad() {
    const canvas = document.getElementById(this.uid).querySelector("canvas");
    const img = document.createElement("img");
    img.src = getAssetPath(`./assets/place-holder.png`);

    img.onload = () => {
      this.imageLoaded = true;
      singleStoke.run(canvas, img);
    };
  }

  render() {
    return (
      <Host id={this.uid}>
        <div class={`overlay ${this.imageLoaded ? "hidden" : ""}`}>
          <h2>Single Stroke</h2>
          <h3>by: Ar Nazeh</h3>
        </div>
        <canvas></canvas>
      </Host>
    );
  }
}
