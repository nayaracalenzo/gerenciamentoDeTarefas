// const http = require('http');


// const server = http.createServer((req, res) => {
//   res.end('Hello World');
// });

// server.listen(9000, () => {
//   console.log(`Server running at http://localhost:9000/`);
// });

const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send();
});


app.listen(9000, () => {
  console.log(`Servidor rodando na porta http://localhost:9000/`);
});