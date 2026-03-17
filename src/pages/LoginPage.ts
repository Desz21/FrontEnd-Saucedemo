import { Page } from 'playwright';

// Page Object Model: encapsula los selectores y acciones de la página de login
// Ventaja: si cambia un selector, solo lo cambiamos aquí y no en todos los tests
export class LoginPage {
private page: Page;

// Selectores de la página
private usernameInput = '#user-name';
private passwordInput = '#password';
private loginButton = '#login-button';
private errorMessage = '[data-test="error"]';

constructor(page: Page) {
    this.page = page;
  }

  // Navega a la página de login
  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Realiza el login con las credenciales dadas
  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  // Obtiene el mensaje de error si el login falla
  async getErrorMessage(): Promise<string> {
    return await this.page.textContent(this.errorMessage) || '';
  }
}