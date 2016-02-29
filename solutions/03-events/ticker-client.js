var Ticker = require('./ticker');

var ticker1 = new Ticker();
ticker1.on('tick', function() {
  console.log('tick!');
});
