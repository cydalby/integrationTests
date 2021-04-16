module.exports = {
  preset: "jest-puppeteer",
  testMatch: ["**/?(*.)+(test).ts"],
  testPathIgnorePatterns: ["/node_modules/", "build", "config"], //
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  globalSetup: "./config/jest.global-setup.ts", // will be called once before all tests are executed
  globalTeardown: "./config/jest.global-teardown.ts", // will be called once after all tests are executed
  testTimeout: 10000,
};
