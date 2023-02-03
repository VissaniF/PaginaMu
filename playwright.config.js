// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  timeout: 1000*60*10,
  use: {
    trace: 'on-first-retry',
    video: 'on'
    
  },
  projects: [
    {
      name: 'Google Chrome',
      use: {
        // Supported Microsoft Edge channels are: msedge, msedge-beta, msedge-dev, msedge-canary
          channel: 'chrome'
      }
    },
    /*
    {
      name: 'chromium'
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/
  ],
  reporter: [ ['html', { open: 'never' }] ],
};

module.exports = config;