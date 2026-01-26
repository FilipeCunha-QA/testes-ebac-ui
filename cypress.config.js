const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'af4m9y',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
