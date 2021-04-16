describe("Nav Bar", () => {
  beforeEach(() => {
    return page.goto(`chrome-extension://${config.exId}/index.html`);
  });

  it("Renders four nav items", async () => {
    const navBarItems = await page.$x("//nav/ul/li");

    expect(navBarItems.length).toEqual(4);
  });

  [
    { name: "Simulator", selector: "#tile" },
    { name: "Audit", selector: "#button" },
    { name: "Settings", selector: "#tags" },
  ].map((item) => {
    return it(`Navigation works as expected - ${item.name}`, async () => {
      await page.click(`#${item.name}`);
      const element = await page.$(`${item.selector}`);

      expect(element !== null).toEqual(true);
    });
  });
});
