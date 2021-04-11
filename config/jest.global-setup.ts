/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const { setup: setupPuppeteer } = require("jest-environment-puppeteer");

const globalSetup = (globalConfig: any): void => setupPuppeteer(globalConfig);

export default globalSetup;
