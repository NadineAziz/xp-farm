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

  it("Should return false when one of the pair of parenthesis is given twice", () => {
    expect(validParentheses("(()")).toBe(false);
  });

  it("Should return true when pair is given correctly", () => {
    expect(validParentheses("()")).toBe(true);
  });

  it("Should return true when pair is given correctly", () => {
    expect(validParentheses("()")).toBe(true);
  });

  it("Should return true when several pairs are given correctly", () => {
    expect(validParentheses("()()()")).toBe(true);
  });

  it("Should return true when pair is given with word correctly", () => {
    expect(validParentheses("(something)")).toBe(true);
  });

  it("Should return true when pair is given correctly", () => {
    expect(validParentheses("(something (is here)(not there))")).toBe(true);
  });
});
