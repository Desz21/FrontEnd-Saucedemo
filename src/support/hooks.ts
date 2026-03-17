import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { World } from './world';

// BeforeAll: se ejecuta una vez antes de todos los tests
// Lanzamos el navegador aquí para no abrirlo en cada escenario
let browser: Browser;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false }); // headless: false para ver el navegador
});

AfterAll(async () => {
  await browser.close();
});

// Before: se ejecuta antes de cada escenario
// Creamos un contexto y página nuevos para que cada test sea independiente
Before(async function (this: World) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

// After: se ejecuta después de cada escenario
After(async function (this: World) {
  await this.page.close();
  await this.context.close();
});