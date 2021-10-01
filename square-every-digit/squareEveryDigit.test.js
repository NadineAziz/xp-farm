const { squareEveryDigit } = require("./squareEveryDigit");

describe("Square Every Number", () => {
  it("Given a single digit number 1 when I want to concatenate the number then it will be squared", () => {
    expect(squareEveryDigit(1)).toEqual(1);
  });
});
