const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      return config;
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 800,
    baseUrl: "https://www.saucedemo.com/",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,

    watchForFileChanges: false,
    excludeSpecPattern: [],
    experimentalRunAllSpecs: true,
    video: true,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    videoCompression: 32,
    videoUploadOnPasses: false,
  },
});
