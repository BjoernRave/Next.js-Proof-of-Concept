const express = require("express")
const url = require("url")
const path = require("path")
const next = require("next")

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

app.prepare().then(() => {
  const server = express();


  server.get('/service-worker.js',(req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;
    const filePath = path.join(__dirname, "..", pathname);
    app.serveStatic(req, res, filePath);
  })

  server.get('*', app.getRequestHandler());

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
