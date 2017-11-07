let http = require('http');
let url = require('url');
let fs = require('fs');

let servidor = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  let archive = '';
  switch (request.url) {
    case '/':
      archive = '/artigos.html';
      break;
    case '/artigos':
      archive = '/artigos.html';
      break;

    case '/contato':
      archive = '/contato.html';
      break;

    default:
      archive = '/erro.html';
      break;
  }
  fs.readFile(__dirname + archive, function (erro, html) {
    response.write(html);
    response.end();
  })
});
servidor.listen(3000, function () {
  console.log('servidor nas alturaas!')
});