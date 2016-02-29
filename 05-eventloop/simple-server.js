'use strict';

const http = require('http');
let requestId = 0;

const server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello, world!');
	res.end();

	let id = ++requestId;
	console.log('Sleeping...' + id);
	sleep(3000);
	console.log('Waking...' + id);
});

function sleep(milliseconds) {
	var start = Date.now();
	while ((Date.now() - start) < milliseconds)
		;
}

server.listen(8082);
console.log('Server started on port:', server.address().port);

