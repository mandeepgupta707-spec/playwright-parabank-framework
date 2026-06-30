// playwright.config.js

require('dotenv').config();

module.exports = {
  use: {
    baseURL: process.env.BASE_URL,
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
};