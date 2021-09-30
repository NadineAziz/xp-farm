const { areTheyTheSame } = require("./areTheyTheSame");

describe("Are they the same?", () => {
  describe("User Story 1: Arrays with Initial elements", () => {
    it("Scenario 1 : should return false when both arrays are empty", () => {
      expect(areTheyTheSame([], [])).toBe(false);
    });

    it("Scenario 5 : Given 2 arrays a=[2] b=[4] when I try to compare them then gives true", () => {
      expect(areTheyTheSame([2],[4])).toBe(true);
    });
  });
});
