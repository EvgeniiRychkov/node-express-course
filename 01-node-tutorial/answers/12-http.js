const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  
  if (req.url === '/') {
    res.end('<h1>Добро пожаловать на мой сервер!</h1>');
  } else if (req.url === '/about') {
    res.end('<h1>О нас</h1><p>Это простой сервер на Node.js</p>');
  } else {
    res.statusCode = 404;
    res.end('<h1>404 - Страница не найдена</h1>');
  }
});

server.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});