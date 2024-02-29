"use strict";

var utils = require("../utils/writer.js");
var Auth = require("../services/AuthService.js");

module.exports.generateToken = function generateToken(
  req,
  res,
  next,
  body,
  operation
) {
  Auth.generateToken(body, req)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
