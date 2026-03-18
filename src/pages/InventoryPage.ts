import { Page } from 'playwright';

export class InventoryPage {
private page: Page;

// Selectores de dos productos distintos para el Scenario Outline
private addToCartBackpack = '[data-test="add-to-cart-sauce-labs-backpack"]';
private addToCartBikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
private cartIcon = '.shopping_cart_link';
private cartBadge = '.shopping_cart_badge';

constructor(page: Page) {
    this.page = page;
  }

  async isOnInventoryPage(): Promise<boolean> {
    return this.page.url().includes('/inventory');
  }

  // Agrega el primer producto (Backpack)
  async addProductToCart() {
    await this.page.click(this.addToCartBackpack);
  }

  // Agrega el segundo producto (Bike Light) — usado en Scenario Outline de cantidades
  async addSecondProductToCart() {
    await this.page.click(this.addToCartBikeLight);
  }

  async getCartCount(): Promise<string> {
    return await this.page.textContent(this.cartBadge) || '0';
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}