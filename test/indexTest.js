const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('ruta-a-tu-pagina-web');

  // Rellenar el formulario de comentarios
  await page.fill('#nombre', 'Nombre de ejemplo');
  await page.fill('#email', 'correo@example.com');
  await page.fill('#comentario', 'Este es un comentario de ejemplo');

  // Enviar el formulario
  await page.click('form button[type="submit"]');

  // Esperar a que aparezca la alerta de éxito
  await page.waitForSelector('div.alert', { visible: true });

  // Capturar una captura de pantalla de la página después de enviar el comentario
  await page.screenshot({ path: 'screenshot-after-comment.png' });

  await browser.close();
})();
