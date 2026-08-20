const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:53188/admin/');
  await page.waitForTimeout(2000);
  const loginBtn = await page.$('button');
  if (loginBtn) {
    await loginBtn.click();
    await page.waitForTimeout(5000);
  }
  await page.waitForSelector('a[href^="#/collections/properties/entries/"]', { timeout: 10000 }).catch(() => {});
  
  const getGridStyle = await page.evaluate(() => {
    const ul = document.querySelector('ul[class*="CardsGrid"]');
    return window.getComputedStyle(ul).display;
  });
  console.log("Grid View display:", getGridStyle);
  
  await page.click('button[aria-label="List view option"]');
  await page.waitForTimeout(2000);
  
  const getListStyle = await page.evaluate(() => {
    const ul = document.querySelector('ul[class*="CardsGrid"]');
    return window.getComputedStyle(ul).display;
  });
  console.log("List View display:", getListStyle);
  
  await browser.close();
})();
