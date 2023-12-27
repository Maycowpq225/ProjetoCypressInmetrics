const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: ["**/*.feature"],
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
