/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const { setup: setupPuppeteer } = require("jest-environment-puppeteer");

const globalSetup = (globalConfig: any): void => {
  const config = { ...globalConfig, config: require("../config") };
  return setupPuppeteer(config);
};

export default globalSetup;
