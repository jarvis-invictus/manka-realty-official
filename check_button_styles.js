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
  
  const getButtonColor = await page.evaluate(() => {
    const listBtn = document.querySelector('button[aria-label="List view option"]');
    if (!listBtn) return null;
    return window.getComputedStyle(listBtn).color;
  });
  console.log("List button color (grid active):", getButtonColor);
  
  await page.click('button[aria-label="List view option"]');
  await page.waitForTimeout(2000);
  
  const getButtonColorAfter = await page.evaluate(() => {
    const listBtn = document.querySelector('button[aria-label="List view option"]');
    return window.getComputedStyle(listBtn).color;
  });
  console.log("List button color (list active):", getButtonColorAfter);
  
  await browser.close();
})();
