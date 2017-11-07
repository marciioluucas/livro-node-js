let http = require('http');
let url = require('url');
let server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Dados de uma query string</h1>");

    let result = url.parse(request.url, true);

    for(let key in result.query){
        response.write("<h2>"+key+": " +result.query[key]+"</h2>")
    }

    response.end();
});

server.listen(3000, function () {
    console.log('servidor rodando, uhu!')
});