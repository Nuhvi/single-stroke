import { newSpecPage } from "@stencil/core/testing";
import { SingleStroke } from "./single-stroke";

describe("single-stroke", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [SingleStroke],
      html: "<single-stroke></single-stroke>",
    });
    expect(root).toEqualHtml(`
      <single-stroke>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </single-stroke>
    `);
  });

  it("renders with values", async () => {
    const { root } = await newSpecPage({
      components: [SingleStroke],
      html: `<single-stroke first="Stencil" last="'Don't call me a framework' JS"></single-stroke>`,
    });
    expect(root).toEqualHtml(`
      <single-stroke first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </single-stroke>
    `);
  });
});
