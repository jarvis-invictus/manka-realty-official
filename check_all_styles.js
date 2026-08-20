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
  
  const getGridStyles = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('style')).map(s => s.innerHTML).join('\n---\n');
  });
  require('fs').writeFileSync('grid_all.css', getGridStyles);
  
  await page.click('button[aria-label="List view option"]');
  await page.waitForTimeout(2000);
  
  const getListStyles = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('style')).map(s => s.innerHTML).join('\n---\n');
  });
  require('fs').writeFileSync('list_all.css', getListStyles);
  
  await browser.close();
})();
