const { sumOfNumbers } = require("./sum-of-numbers");

describe("Sum of Numbers", () => {
  it("Given a=0 and b=0 when I sum them up then should give me 0", () => {
    expect(sumOfNumbers(0, 0)).toEqual(0);
  });

  it("Given a=1 and b=0 when I sum them up then should give me 1", () => {
    expect(sumOfNumbers(1, 0)).toEqual(1);
  });

  it("Given a=1 and b=2 when I sum them up then should give me 3", () => {
    expect(sumOfNumbers(1, 2)).toEqual(3);
  });

  it("Given a=-1 and b=2 when I sum them up then should give me 2", () => {
    expect(sumOfNumbers(-1, 2)).toEqual(2);
  });
});
