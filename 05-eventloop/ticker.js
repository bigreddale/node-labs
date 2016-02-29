var util = require('util');
EventEmitter = require('events').EventEmitter;

module.exports = Ticker;

function Ticker(delay) {
  var delay = delay || 1000;
  var self = this;

  setInterval(function() {
      self.emit('tick');
    }, delay);
};
util.inherits(Ticker, EventEmitter);

