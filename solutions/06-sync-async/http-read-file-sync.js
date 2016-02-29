'use strict';

const http = require('http');
const fs = require('fs');
const contents = fs.readFileSync('index.html', 'utf8');

const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(contents);
  res.end();
});

server.listen(8082);
console.log('Server started');

