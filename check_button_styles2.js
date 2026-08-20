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
  
  const getStyles = await page.evaluate(() => {
    const listBtn = document.querySelector('button[aria-label="List view option"]');
    const listSvg = listBtn.querySelector('svg');
    const gridBtn = document.querySelector('button[aria-label="Grid view option"]');
    const gridSvg = gridBtn.querySelector('svg');
    return {
       listFill: window.getComputedStyle(listSvg).fill,
       gridFill: window.getComputedStyle(gridSvg).fill,
       listColor: window.getComputedStyle(listBtn).color,
       gridColor: window.getComputedStyle(gridBtn).color,
       listClass: listBtn.className,
       gridClass: gridBtn.className
    };
  });
  console.log("Before click (Grid Active):", getStyles);
  
  await page.click('button[aria-label="List view option"]');
  await page.waitForTimeout(2000);
  
  const getStylesAfter = await page.evaluate(() => {
    const listBtn = document.querySelector('button[aria-label="List view option"]');
    const listSvg = listBtn.querySelector('svg');
    const gridBtn = document.querySelector('button[aria-label="Grid view option"]');
    const gridSvg = gridBtn.querySelector('svg');
    return {
       listFill: window.getComputedStyle(listSvg).fill,
       gridFill: window.getComputedStyle(gridSvg).fill,
       listColor: window.getComputedStyle(listBtn).color,
       gridColor: window.getComputedStyle(gridBtn).color,
       listClass: listBtn.className,
       gridClass: gridBtn.className
    };
  });
  console.log("After click (List Active):", getStylesAfter);
  
  await browser.close();
})();
