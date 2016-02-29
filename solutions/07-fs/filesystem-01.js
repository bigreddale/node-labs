var fs = require('fs');

fs.mkdir('dirA', function(err) {
	if (err) throw err;
	console.log('dirA created');

	fs.writeFile('dirA/file1.txt', 'This is file 1', function(err) {
		if (err) throw err;
		console.log('File written.');

		fs.rename('dirA', 'dirB', function(err) {
			if (err) throw err;
			console.log('dirA renamed to dirB.');
		});
	});

});

