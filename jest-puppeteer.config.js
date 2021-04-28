const path = require("path");

const pathToExtension = path.join(__dirname, "../chromeEx/build/");

module.exports = {
  launch: {
    headless: false,
    args: [
      '--no-sandbox',
      '–-disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  },
};