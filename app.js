var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! This is nitin padol');
  res.end('Hi this is new repository');
}).listen(8080);
