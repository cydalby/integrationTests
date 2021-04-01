// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pathToExtension = require("path").join(path.join(__dirname, "../../chromeEx/build"));

module.exports = {
  launch: {
    dumpio: true,
    headless: false,
    args: [
      "--disable-infobars",
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  },
  browserContext: "default",
};
