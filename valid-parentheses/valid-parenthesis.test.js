const { validParantheses } = require("./valid-parentheses");

describe("Valid Parentheses", () => {
  it("Should return false when one of the pair of parenthesis is given", () => {
    expect(validParantheses("(")).toBe(false);
  });
});
