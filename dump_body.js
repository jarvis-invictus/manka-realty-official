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
  
  // click the second button in the AppHeader that has a class containing Toggle
  await page.evaluate(() => {
    const toggles = document.querySelectorAll('button[class*="Toggle"]');
    if (toggles.length > 1) {
      toggles[1].click(); // usually grid is 0, list is 1, or list is 0? 
      // let's click the last one
      toggles[toggles.length - 1].click();
    }
  });
  
  await page.waitForTimeout(2000);
  
  const html = await page.evaluate(() => document.body.innerHTML);
  require('fs').writeFileSync('body.html', html);
  await browser.close();
})();
