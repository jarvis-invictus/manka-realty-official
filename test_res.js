const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/residential.html');
  const cards = await page.$$('.property-card');
  console.log("residential.html cards:", cards.length);
  
  await page.goto('http://localhost:8080/commercial.html');
  const com_cards = await page.$$('.property-card');
  console.log("commercial.html cards:", com_cards.length);

  await browser.close();
})();
