const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/Features/*.feature",
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php",
    supportFile: 'cypress/support/e2e.js',
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 120000,
    video:false,
    screenshotOnRunFailure:true,
  },
});
