jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(() => "mocked_token"),
  verify: jest.fn((token, secret, callback) => callback(null)),
}));

const jwt = require("jsonwebtoken");
const { generateToken, verifyToken } = require("../../services/AuthService"); // Adjust the path as necessary

describe("Token Service", () => {
  describe("generateToken", () => {
    it("generates a token successfully", async () => {
      await expect(generateToken()).resolves.toEqual({ token: "mocked_token" });
      expect(jwt.sign).toHaveBeenCalled();
    });
  });

  describe("verifyToken", () => {
    it("verifies a valid token successfully", async () => {
      await expect(verifyToken("valid_token")).resolves.toBeUndefined();
      expect(jwt.verify).toHaveBeenCalled();
    });

    it("rejects an invalid token", async () => {
      jwt.verify.mockImplementationOnce((token, secret, callback) =>
        callback(new Error("Invalid token"), null)
      );

      await expect(verifyToken("invalid_token")).rejects.toBeUndefined();
    });

    it("rejects when no token is provided", async () => {
      await expect(verifyToken(null)).rejects.toBeUndefined();
    });
  });
});
