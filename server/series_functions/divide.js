var reduce = require('../utils/reduce.js');

module.exports = {
  args: [
    {
      name: 'inputSeries',
      types: ['seriesList']
    },
    {
      name: 'divisor',
      types: ['seriesList', 'number']
    }
  ],
  help: 'Divides the values of one or more series in a seriesList to each position, in each series, of the input seriesList',
  fn: function divide (inputSeries, divisor) {
    return reduce([inputSeries, divisor], function (a, b) {
      return a / b;
    });
  }
};
