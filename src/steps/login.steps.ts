import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { World } from '../support/world';

// Cada step mapea una línea del feature file a código
Given('el usuario está en la página de login', async function (this: World) {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('ingresa usuario {string} y contraseña {string}', async function (this: World, username: string, password: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(username, password);
});

Then('debe ver la página de inventario', async function (this: World) {
  const inventoryPage = new InventoryPage(this.page);
  const isOnInventory = await inventoryPage.isOnInventoryPage();
  expect(isOnInventory).toBe(true);
});

Then('debe ver el mensaje de error {string}', async function (this: World, expectedMessage: string) {
  const loginPage = new LoginPage(this.page);
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain(expectedMessage);
});