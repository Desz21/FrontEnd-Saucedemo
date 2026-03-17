import { When, Then, Given } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { World } from '../support/world';

// El Background del shopping.feature reutiliza los steps de login.steps.ts

When('agrega un producto al carrito', async function (this: World) {
  const inventoryPage = new InventoryPage(this.page);
  await inventoryPage.addProductToCart();
});

Then('el carrito debe mostrar {int} producto', async function (this: World, count: number) {
  const inventoryPage = new InventoryPage(this.page);
  const cartCount = await inventoryPage.getCartCount();
  expect(parseInt(cartCount)).toBe(count);
});

When('va al carrito', async function (this: World) {
  const inventoryPage = new InventoryPage(this.page);
  await inventoryPage.goToCart();
});

When('procede al checkout', async function (this: World) {
  const cartPage = new CartPage(this.page);
  await cartPage.checkout();
});

When('completa los datos de envío {string} {string} {string}', async function (this: World, firstName: string, lastName: string, postalCode: string) {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.fillShippingInfo(firstName, lastName, postalCode);
});

When('confirma la compra', async function (this: World) {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.finish();
});

Then('debe ver el mensaje de confirmación {string}', async function (this: World, expectedMessage: string) {
  const checkoutPage = new CheckoutPage(this.page);
  const message = await checkoutPage.getConfirmationMessage();
  expect(message).toContain(expectedMessage);
});