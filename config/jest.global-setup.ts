/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { setup: setupPuppeteer } = require("jest-environment-puppeteer");

const globalSetup = (globalConfig: any): void => {
  return setupPuppeteer(globalConfig);
};

export default globalSetup;
