import { Component, Prop, h, getAssetPath, Host } from "@stencil/core";
import singleStoke from "../scripts/index";
@Component({
  tag: "single-stroke",
  styleUrl: "single-stroke.css",
  assetsDirs: ["assets"],
})
export class SingleStroke {
  /**
   * The image src
   */
  @Prop() hostId: string = `single-stroke-${Math.floor(
    Math.random() * 1000000
  )}`;

  componentDidLoad() {
    const host = document.getElementById(this.hostId);
    host.innerHTML = "";
    const img = document.createElement("img");
    img.src = getAssetPath(`./assets/test.png`);

    img.onload = () => {
      singleStoke.run(host, img);
    };
  }

  render() {
    return <Host id={this.hostId}></Host>;
  }
}
