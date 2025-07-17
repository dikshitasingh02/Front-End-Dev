const { TestEnvironment } = require("jest-environment-jsdom");

module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./src/setupTests.js"], // Make sure this file exists
  moduleNameMapper: {
    "^.+\\.css$": "identity-obj-proxy", // fixed typo
  },
};
