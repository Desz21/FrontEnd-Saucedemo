import { Page } from 'playwright';

export class CartPage {
private page: Page;

private checkoutButton = '[data-test="checkout"]';
private cartItems = '.cart_item';

constructor(page: Page) {
    this.page = page;
  }

  // Verifica que hay items en el carrito
  async hasItems(): Promise<boolean> {
    const items = await this.page.$$(this.cartItems);
    return items.length > 0;
  }

  // Procede al checkout
  async checkout() {
    await this.page.click(this.checkoutButton);
  }
}