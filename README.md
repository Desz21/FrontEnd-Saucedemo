# Automatización QA - FrontEnd Sauce Demo | Playwright + Cucumber

Suite de pruebas automatizadas sobre la aplicación web [Sauce Demo](https://www.saucedemo.com/),
construida con Playwright y Cucumber (Gherkin) usando el patrón Page Object Model.

## Requisitos previos

- Node.js 18 o superior
- npm

Verificar instalación:
```bash
node -v
npm -v
```

## Instalación
```bash
npm install
npx playwright install
```

## Cómo ejecutar

Ejecutar todos los tests:
```bash
npm test
```

Ejecutar con reporte HTML:
```bash
npm run test:report
```

El reporte se genera en `reports/report.html`. Abrirlo en cualquier navegador para ver los resultados detallados.

## Estructura del proyecto
```
src/
├── features/
│   ├── login.feature         # Escenarios de autenticación
│   └── shopping.feature      # Escenarios de compra
├── pages/
│   ├── LoginPage.ts          # Page Object de la página de login
│   ├── InventoryPage.ts      # Page Object del catálogo de productos
│   ├── CartPage.ts           # Page Object del carrito de compras
│   └── CheckoutPage.ts       # Page Object del proceso de checkout
├── steps/
│   ├── login.steps.ts        # Step definitions de autenticación
│   └── shopping.steps.ts     # Step definitions del flujo de compra
└── support/
    ├── hooks.ts              # Configuración de ciclo de vida (Before/After)
    └── world.ts              # Objeto compartido entre steps (página y contexto)
```

## Escenarios cubiertos

**Login:**
- Inicio de sesión exitoso con `standard_user`
- Inicio de sesión fallido con `locked_out_user`

**Flujo de compra:**
- Agregar producto al carrito desde el inventario
- Completar proceso de compra hasta confirmación del pedido

## Credenciales de prueba

| Usuario | Contraseña | Tipo |
|---|---|---|
| standard_user | secret_sauce | Usuario estándar |
| locked_out_user | secret_sauce | Usuario bloqueado |

## Estrategia de automatización

Los tests están organizados siguiendo el patrón **Page Object Model (POM)**: cada página
de la aplicación tiene su propia clase que encapsula los selectores y acciones disponibles.
Esto separa la lógica de navegación de los step definitions, haciendo el código más
mantenible y fácil de extender.

Los hooks de Cucumber gestionan el ciclo de vida del navegador: se lanza una sola instancia
por suite y se crea un contexto limpio por escenario, garantizando independencia entre tests.

## Tecnologías

- Node.js 18+
- TypeScript
- Playwright
- Cucumber (Gherkin)
- Page Object Model