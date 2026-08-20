const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://manka-realty-official.vercel.app/admin/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  
  const rootHtml = await page.evaluate(() => {
    const root = document.querySelector('#nc-root');
    return root ? root.outerHTML : "NO ROOT FOUND";
  });
  
  fs.writeFileSync('nc-root.html', rootHtml);
  await browser.close();
})();
