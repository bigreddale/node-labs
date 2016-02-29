var Ticker = require('./ticker');

var ticker1 = new Ticker();
ticker1.on('tick', function() {
  console.log('tick!');
});
ticker1.on('start', function() {
  console.log('ticker started');
});
