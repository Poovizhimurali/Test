// launch-browser.js

const { chromium } = require('playwright'); // You can also use firefox or webkit

(async () => {
    // Launch the browser
    const browser = await chromium.launch({
        channel: 'chrome',
        headless: false }); // set headless: true to run in background

    // Create a new browser context (like a fresh user profile)
    const context = await browser.newContext();

    // Open a new page
    const page = await context.newPage();

    // Navigate to a website
    await page.goto('https://www.amazon.in/');

    // Optional: wait so you can see the browser before it closes
    await page.waitForTimeout(5000);

    // Close the browser
    await browser.close();
})();
