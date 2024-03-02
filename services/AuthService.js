"use strict";

const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_EXPIRATION = "1m"; // Token expiration time

exports.generateToken = function () {
  return new Promise(function (resolve, reject) {
    const payload = {
      info: "This is a public token",
    };

    try {
      const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRATION,
      });
      resolve({ token });
    } catch (error) {
      console.error("Error generating token:", error.message);
      reject("Error generating token");
    }
  });
};

exports.verifyToken = function (token) {
  return new Promise(function (resolve, reject) {
    if (token == null) return reject();

    jwt.verify(token, JWT_SECRET, (err) => {
      if (err) return reject(); // Invalid token
      resolve();
    });
  });
};
