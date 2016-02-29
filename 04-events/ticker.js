var util = require('util');
EventEmitter = /* TODO: Complete this */

module.exports = Ticker;

function Ticker(delay) {
  var delay = delay || 1000;
  var self = this;

  setInterval(function() {
      /* TODO: Generate the tick event here */
    }, delay);
};
/* TODO: Set up inheritance so that Ticker inherits from EventEmitter */

