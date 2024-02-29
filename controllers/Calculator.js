'use strict';

var utils = require('../utils/writer.js');
var Calculator = require('../service/CalculatorService');

module.exports.calculate = function calculate (req, res, next, body, operation) {
  Calculator.calculate(body, req)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
