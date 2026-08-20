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
  
  const getCardsUl = () => {
    const a = document.querySelector('a[href^="#/collections/properties/entries/"]');
    if (!a) return "";
    return a.closest('ul').outerHTML;
  }
  
  const gridHtml = await page.evaluate(getCardsUl);
  require('fs').writeFileSync('grid_cards.html', gridHtml);
  
  await page.click('button[aria-label="List view option"]');
  await page.waitForTimeout(2000);
  
  const listHtml = await page.evaluate(getCardsUl);
  require('fs').writeFileSync('list_cards.html', listHtml);
  
  await browser.close();
})();
