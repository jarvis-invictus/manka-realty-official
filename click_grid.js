const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:53188/admin/');
  await page.waitForTimeout(2000);
  const loginBtn = await page.$('button');
  if (loginBtn) {
    await loginBtn.click();
    await page.waitForTimeout(5000);
  }
  await page.waitForSelector('a[href^="#/collections/properties/entries/"]', { timeout: 10000 }).catch(() => {});
  
  await page.screenshot({ path: 'default_view.png' });
  
  // click GRID view toggle
  await page.click('button[aria-label="Grid view option"]');
  await page.waitForTimeout(2000);
  
  await page.screenshot({ path: 'grid_view_actual.png' });
  
  const getStyle = await page.evaluate(() => {
    const ul = document.querySelector('ul[class*="CardsGrid"]');
    const li = ul.querySelector('li');
    return window.getComputedStyle(li).width;
  });
  console.log("Grid liWidth:", getStyle);

  await browser.close();
})();
