const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
 // res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html>
  <head>
    <title>My Node.js Server</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my Node.js server serving an HTML page.</p>
  </body>
  </html>
  `);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});