import * as config from "../config";

describe("Audit", () => {
  beforeEach(async () => {
    await page.goto(`chrome-extension://${config.exId}/index.html`);
    await page.click("#Audit");
  });

  it("Click CreateReport and see Error Component", async () => {
    const [button] = await page.$x('//button[text()="Create Report"]');

    button && (await button.click());
    
    await page.waitForTimeout(5000);

    const retryBtn = await page.$("#retryBtn");

    expect(retryBtn !== null);
  });
});
