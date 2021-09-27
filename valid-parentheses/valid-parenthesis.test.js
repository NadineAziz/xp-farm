const { validParentheses } = require("./valid-parentheses");

describe("Valid Parentheses", () => {
  it("Should return false when one of the pair of parenthesis is given", () => {
    expect(validParentheses("(")).toBe(false);
  });

  it("Should return false when one of the pair of parenthesis with word is given", () => {
    expect(validParentheses("(something")).toBe(false);
  });

  it("Should return false when one of the pair of parenthesis is given twice", () => {
    expect(validParentheses("((")).toBe(false);
  });

});
