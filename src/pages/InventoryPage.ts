import { Page } from 'playwright';

export class InventoryPage {
private page: Page;

private addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
private cartIcon = '.shopping_cart_link';
private cartBadge = '.shopping_cart_badge';

constructor(page: Page) {
    this.page = page;
  }

  // Verifica que estamos en la página de inventario
  async isOnInventoryPage(): Promise<boolean> {
    return this.page.url().includes('/inventory');
  }

  // Agrega el primer producto al carrito
  async addProductToCart() {
    await this.page.click(this.addToCartButton);
  }

  // Obtiene la cantidad de items en el carrito
  async getCartCount(): Promise<string> {
    return await this.page.textContent(this.cartBadge) || '0';
  }

  // Navega al carrito
  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}