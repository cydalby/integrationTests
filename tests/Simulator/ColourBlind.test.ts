import * as config from "../../config";
import { isVisible } from "../../helpers";

describe("Colour Blind Simulator", () => {
  beforeEach(async () => {
    await page.goto(`chrome-extension://${config.exId}/index.html`);
    await page.click("#Simulator");

    const [btn] = await page.$x('//button[text()="Colour Blind"]');

    await btn.click();
  });

  it("See Filter Component", async () => {
    const foo = !!await page.waitForXPath('//span[text()="Choose filter:"]', {
      visible: true,
    });
    
    expect(foo).toEqual(true);
  });
});
