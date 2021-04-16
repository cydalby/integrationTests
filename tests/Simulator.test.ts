describe("Simulator", () => {
  beforeEach(async () => {
    await page.goto(`chrome-extension://${config.exId}/index.html`);
    await page.click("#Simulator");
  });

  it("Blur Component", async () => {
    const blurBtn = await page.$x('//button[text()="Blur"]');

    await blurBtn[0].click();
    await page.waitForTimeout(5000);
  });
});
