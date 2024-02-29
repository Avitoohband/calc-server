# Swagger generated server

Node.js Calculator API with JWT Authentication
This Node.js application provides a simple calculator API that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. It features JWT-based authentication to secure access to the calculator functionality.

## Features

Arithmetic Operations: Perform addition, subtraction, multiplication, and division.
JWT Authentication: Secure API endpoints using JSON Web Tokens (JWT).
Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Node.js
npm
Installing
Clone the repository to your local machine:

git clone https://github.com/Avitoohband/calc-server
cd calc-server
Install the project dependencies:

npm install

## Configuration

Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of JWT_SECRET=SECRET:

## Running the Application

Start the application with:

npm start
Running Tests
Run the unit tests with:

npm test

To view the Swagger UI interface:

```
open http://localhost:8080/docs
```

## Usage

Generating a JWT Token
Request a token:

GET /token
Response:

{
"token": "your_generated_token"
}

Performing Arithmetic Operations
Send a request to perform an operation (example: addition). Include the JWT token in the Authorization header:

POST /calculate
Headers: Authorization: Bearer your_generated_token
Body:
{
"num1": 5,
"num2": 3,
"operation": "add"
}

Response:

{
"result": 8
}

## Built With

Node.js - The runtime environment
Express - The web framework used
jsonwebtoken - Used to generate and verify JWT tokens

## Authors

Avi Tuchabdn

## Overview

This server was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project. By using the [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification) from a remote server, you can easily generate a server stub.

This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.
