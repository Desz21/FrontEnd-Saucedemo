import { setWorldConstructor, World as CucumberWorld } from '@cucumber/cucumber';
import { BrowserContext, Page } from 'playwright';

// World es el objeto que se comparte entre todos los steps de un escenario
export class World extends CucumberWorld {
page!: Page;
context!: BrowserContext;
}

setWorldConstructor(World);