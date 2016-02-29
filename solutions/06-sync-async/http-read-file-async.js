'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile("index.html", 'utf8', function(err, contents) {
    if (err) {
      throw err;
    }
    res.write(contents);
    res.end();
  });
});

server.listen(8082);
console.log('Server started');

