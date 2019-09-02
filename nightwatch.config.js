const chrome = require("chromedriver");
const firefox = require("geckodriver");
module.exports = {
  src_folders: ['tests/e2e/specs'],
  selenium: {
    host: "127.0.0.1",
    port: 4444,
    cli_args: {
      "webdriver.chrome.driver": chrome.path,
      "webdriver.gecko.driver": firefox.path
    }
  },
  test_settings: {
    firefox: {
      desiredCapabilities: {
        browserName: "firefox",
        acceptInsecureCerts: true,
          "moz:firefoxOptions": {
            args: ["-headless"]
          }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        chromeOptions: {
          args: ["--headless"]
        },
        acceptSslCerts: true
      }
    }
  }
};
