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
  
  const gridHtml = await page.evaluate(() => {
    const ul = document.querySelector('ul');
    return ul ? ul.parentElement.innerHTML : '';
  });
  require('fs').writeFileSync('grid_ul.html', gridHtml);
  
  await page.click('button[aria-label="List view option"]');
  await page.waitForTimeout(2000);
  
  const listHtml = await page.evaluate(() => {
    const ul = document.querySelector('ul');
    return ul ? ul.parentElement.innerHTML : '';
  });
  require('fs').writeFileSync('list_ul.html', listHtml);
  
  await browser.close();
})();
