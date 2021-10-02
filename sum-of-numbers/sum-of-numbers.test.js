const { sumOfNumbers } = require("./sum-of-numbers");

describe("Sum of Numbers", () => {
  it("Given a=0 and b=0 when I sum them up then should give me 0", () => {
	  expect(sumOfNumbers(0,0)).toEqual(0);
  });
});
