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
  
  await page.click('button[aria-label="List view option"]');
  await page.waitForTimeout(2000);
  
  const ls = await page.evaluate(() => JSON.stringify(localStorage));
  console.log(ls);
  
  await browser.close();
})();
