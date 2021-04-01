// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("../config");

describe("Nav Bar", () => {
  beforeEach(async () => {});

  it("Renders four nav items", async () => {
    await page.goto(`chrome-extension://${config.exId}/index.html`);
    const navBarItems = await page.$x("//nav/ul/li");

    expect(navBarItems.length).toEqual(4);
  });
});
