module.exports = {
    "home route e2e tests": browser => {
      browser
        .url(process.env.VUE_DEV_SERVER_URL)
        .waitForElementVisible("body", 10000)
        .assert.elementPresent(".container.container--fluid")
        .assert.elementCount(".container.container--fluid .v-card", 2)
        .end();
    }
  };
  