const { defineConfig } = require("cypress");
module.exports = {
    projectId: "4qexov",
    reporter: "mochawesome",
    reporterOptions: {
        consoleReporter: 'nyan',
        reportDir: "cypress/report/cypressapitests",
        overwrite: false,
        html: true,
        json: true,
        timestamp: "ddmmyyyy_HHMMss",
        reportFilename: "[name]-report",
    },

    e2e: {
        setupNodeEvents(on, config) {},
        "chromeWebSecurity": false

    },

    env: {
        URL_TEST: "https://restful-booker.herokuapp.com",
        username: 'admin',
        password: 'password123',

    },

};