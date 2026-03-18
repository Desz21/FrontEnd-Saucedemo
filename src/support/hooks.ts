import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { World } from './world';

let browser: Browser;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

AfterAll(async () => {
  await browser.close();
});

Before(async function (this: World) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

// Captura screenshot cuando un escenario falla
After(async function (this: World, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    // Toma la captura y la adjunta al reporte HTML de Cucumber
    const screenshot = await this.page.screenshot({ fullPage: true });
    await this.attach(screenshot, 'image/png');
  }
  await this.page.close();
  await this.context.close();
});