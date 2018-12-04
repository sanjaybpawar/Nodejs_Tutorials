var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Hello World This is my first node js program!');
}).listen(8080);
server.listen(port, hostname, () => {
  console.log(`Server running....`);
});
