// eslint-disable-next-line @typescript-eslint/no-var-requires
const { teardown: teardownPuppeteer } = require("jest-environment-puppeteer");

const globalTeardown = (): void => {
  return teardownPuppeteer();
};

export default globalTeardown;
