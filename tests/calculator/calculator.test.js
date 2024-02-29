// tests/CalculatorService.test.js
const { calculate } = require("../../services/CalculatorService");

describe("CalculatorService", () => {
  // Test for addition
  test("adds two numbers", async () => {
    const body = { num1: 1, num2: 2 };
    const req = { headers: { operation: "add" } };
    await expect(calculate(body, req)).resolves.toEqual({ result: 3 });
  });

  // Test for subtraction
  test("subtracts two numbers", async () => {
    const body = { num1: 5, num2: 3 };
    const req = { headers: { operation: "subtract" } };
    await expect(calculate(body, req)).resolves.toEqual({ result: 2 });
  });

  // Test for multiplication
  test("multiplies two numbers", async () => {
    const body = { num1: 4, num2: 3 };
    const req = { headers: { operation: "multiply" } };
    await expect(calculate(body, req)).resolves.toEqual({ result: 12 });
  });

  // Test for division
  test("divides two numbers", async () => {
    const body = { num1: 8, num2: 2 };
    const req = { headers: { operation: "divide" } };
    await expect(calculate(body, req)).resolves.toEqual({ result: 4 });
  });

  describe("CalculatorService - Error Handling", () => {
    // Test for division by zero with async/await and try/catch
    test("returns error for division by zero", async () => {
      expect.assertions(1); // Make sure one assertion is called
      const body = { num1: 5, num2: 0 };
      const req = { headers: { operation: "divide" } };

      try {
        await calculate(body, req);
      } catch (error) {
        expect(error).toMatch("Division by zero is not allowed.");
      }
    });

    // Test for unknown operation with async/await and try/catch
    test("returns error for an unknown operation", async () => {
      expect.assertions(1); // Ensure that one assertion is called
      const body = { num1: 5, num2: 3 };
      const req = { headers: { operation: "unknown" } };

      try {
        await calculate(body, req);
      } catch (error) {
        expect(error).toMatch("Unknown operation.");
      }
    });
  });
});
