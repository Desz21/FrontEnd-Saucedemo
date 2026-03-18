import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { World } from '../support/world';

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

// Nuevo step que maneja los 3 resultados posibles del Scenario Outline
// 'inventario' -> verifica que llegó a la página de productos
// 'bloqueado'  -> verifica el mensaje de usuario bloqueado
// 'invalido'   -> verifica el mensaje de credenciales incorrectas
Then('debe ver resultado {string}', async function (this: World, resultado: string) {
  const loginPage = new LoginPage(this.page);
  const inventoryPage = new InventoryPage(this.page);

  if (resultado === 'inventario') {
    const isOnInventory = await inventoryPage.isOnInventoryPage();
    expect(isOnInventory).toBe(true);

  } else if (resultado === 'bloqueado') {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Sorry, this user has been locked out.');

  } else if (resultado === 'invalido') {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Username and password do not match');
  }
});