// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "shell e2e tests": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("body", 10000)
      .assert.elementPresent(".app-drawer-header")
      .assert.containsText(".app-drawer-header-name", "Friends HQ")
      .assert.elementCount(".v-navigation-drawer .v-list-item", 3)
      .end();
  }
};
