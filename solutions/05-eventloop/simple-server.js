'use strict';

const http = require('http');
let requestId = 0;

const server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello, world!');
	res.end();

	let id = ++requestId;
	console.log('Sleeping...' + id);
	setTimeout(function() {
		console.log('Waking...' + id);
	}, 3000);
});

server.listen(8082);
console.log('Server started');

