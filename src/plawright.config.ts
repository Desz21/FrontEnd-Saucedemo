import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Carpeta donde se guardan los resultados
  outputDir: './test-results',

  use: {
    // Captura screenshot solo cuando falla un test
    screenshot: 'only-on-failure',

    // Graba video solo cuando falla
    video: 'on-first-retry',

    // Guarda la traza para poder revisar paso a paso
    trace: 'on-first-retry',
  },

  reporter: [
    // Reporte HTML con capturas, videos y trazas
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    // Reporte en consola
    ['list']
  ],
});