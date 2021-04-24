import * as config from "../../config";

describe("Blur Simulator", () => {
  beforeEach(async () => {
    await page.goto(`chrome-extension://${config.exId}/index.html`);
    await page.click("#Simulator");

    const [blurBtn] = await page.$x('//button[text()="Blur"]');

    await blurBtn.click();
  });

  it("Blur Component has default value of 2", async () => {
    const blurElement = await page.$("input[type=range]");
    const value = await blurElement?.getProperty("value");

    expect(await value?.jsonValue()).toEqual("2");
  });

  it("Change Blur Component value to 8", async () => {
    await page.evaluate(() => {
      return ((document as any).querySelector("input[type=range]").value = 8);
    });

    const blurElement = await page.$("input[type=range]");

    const value = await blurElement?.getProperty("value");

    expect(await value?.jsonValue()).toEqual("8");
  });
});
