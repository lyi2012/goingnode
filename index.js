var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World\n');
}).listen(2013);

console.log('Hello, server running on port 2013.');