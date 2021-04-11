const path = require("path");

const pathToExtension = path.join(__dirname, "../chromeEx/build/");

module.exports = {
  launch: {
    headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  },
};
