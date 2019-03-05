import express from 'express';
import next from 'next';
import url from 'url';
import path from 'path';
import middleware from 'i18next-express-middleware';
import i18next from 'i18next';

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

i18next.use(middleware.LanguageDetector).init({
  preload: ['en'],
});

(async () => {
  await app.prepare();
  const server = express();

  server.use(middleware.handle(i18next));

  server.get('/service-worker.js', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;
    const filePath = path.join(__dirname, '..', pathname);
    app.serveStatic(req, res, filePath);
  });

  server.get('/hosco', (req, res) => res.redirect('https://www.hosco.com'));


  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
