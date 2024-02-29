"use strict";

/**
 * Perform an arithmetic operation on two numbers.
 *
 * body CalcNum Contains two numbers, num1 and num2.
 * operation String The arithmetic operation to perform (add, subtract, multiply, divide).
 * returns Promise with the calculation result.
 **/

const Operation = {
  ADD: "add",
  SUBTRACT: "subtract",
  MULTIPLY: "multiply",
  DIVIDE: "divide",
};

exports.calculate = function (body, req) {
  return new Promise(function (resolve, reject) {
    // Initialize result
    let result;
    const operation = req.headers["operation"]; // Accessing the operation from headers

    // Perform operation
    switch (operation.toLowerCase()) {
      case Operation.ADD:
        result = body.num1 + body.num2;
        break;
      case Operation.SUBTRACT:
        result = body.num1 - body.num2;
        break;
      case Operation.MULTIPLY:
        result = body.num1 * body.num2;
        break;
      case Operation.DIVIDE:
        // Check for division by zero
        if (body.num2 === 0) {
          reject("Division by zero is not allowed.");
          return;
        }
        result = body.num1 / body.num2;
        break;
      default:
        // Handle unknown operation
        reject("Unknown operation.");
        return;
    }

    // Prepare and resolve the result
    var response = {
      "application/json": {
        result: result,
      },
    };

    resolve(response["application/json"]);
  });
};
