const fs = require('fs');

fs.stat('dirB/file1.txt', function(err, stats) {
  if (err) {
    throw err;
  }
  console.log(stats);
});
