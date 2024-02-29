"use strict";

var utils = require("../utils/writer.js");
var Calculator = require("../services/CalculatorService.js");
const AuthService = require("../services/AuthService.js");

module.exports.calculate = function calculate(req, res, next, body, operation) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extract the token from Bearer
  AuthService.verifyToken(token)
    .then(() => {
      Calculator.calculate(body, req)
        .then(function (response) {
          utils.writeJson(res, response);
        })
        .catch(function (response) {
          utils.writeJson(res, response);
        });
    })
    .catch((err) => {
      utils.writeJson(res, "Invalid Token", 401);
    });
};
