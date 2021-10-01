const { squareEveryDigit } = require("./squareEveryDigit");

describe("Square Every Number", () => {
  it("Given a single digit number 1 when I want to concatenate the number then it will be squared", () => {
    expect(squareEveryDigit(1)).toEqual('1');
  });

  it("Given a single digit number 9 when I want to concatenate the number then it will be squared", () => {
    expect(squareEveryDigit(9)).toEqual('81');
  });

  it("Given a double digit number 10 when I want to concatenate the number then it will be squared", () => {
    expect(squareEveryDigit(10)).toEqual('10');
  });

  it("Given a double digit number 30 when I want to concatenate the number then it will be squared", () => {
    expect(squareEveryDigit(30)).toEqual('90');
  });

  it("Given a three digit number 231 when I want to concatenate the number then it will be squared", () => {
    expect(squareEveryDigit(231)).toEqual('491');
  });
});
