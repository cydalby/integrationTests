import * as config from "../config";

describe("Simulator", () => {
  beforeEach(async () => {
    await page.goto(`chrome-extension://${config.exId}/index.html`);
    await page.click("#Simulator");
  });

  it("Blur Component has default value of 2", async () => {
    const blurBtn = await page.$x('//button[text()="Blur"]');

    await blurBtn[0].click();

    const blurElement = await page.$("input[type=range]");
    const value = await blurElement?.getProperty("value");

    expect(await value?.jsonValue()).toEqual("2");
  });

  it("Change Blur Component value to 8", async () => {
    const blurBtn = await page.$x('//button[text()="Blur"]');

    await blurBtn[0].click();

    const blurElement = await page.$("input[type=range]");
  });
});
