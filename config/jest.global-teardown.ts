const { teardown: teardownPuppeteer } = require("jest-environment-puppeteer");

const globalTeardown = (): void => teardownPuppeteer();

export default globalTeardown;
