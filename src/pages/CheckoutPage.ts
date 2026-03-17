import { Page } from 'playwright';

export class CheckoutPage {
private page: Page;

private firstNameInput = '[data-test="firstName"]';
private lastNameInput = '[data-test="lastName"]';
private postalCodeInput = '[data-test="postalCode"]';
private continueButton = '[data-test="continue"]';
private finishButton = '[data-test="finish"]';
private confirmationHeader = '.complete-header';

constructor(page: Page) {
    this.page = page;
  }

  // Completa el formulario de información de envío
  async fillShippingInfo(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueButton);
  }

  // Confirma la compra
  async finish() {
    await this.page.click(this.finishButton);
  }

  // Obtiene el mensaje de confirmación
  async getConfirmationMessage(): Promise<string> {
    return await this.page.textContent(this.confirmationHeader) || '';
  }
}