const { areTheyTheSame } = require("./areTheyTheSame");

describe("Are they the same?", () => {
  describe("User Story 1: Arrays with single elements", () => {
    it("Scenario 1 : should return false when both arrays are empty", () => {
      expect(areTheyTheSame([], [])).toBe(false);
    });

    it("Scenario 2 : should return true when both numbers are equal", () => {
      expect(areTheyTheSame([1],[1])).toBe(true);
      expect(areTheyTheSame([2],[2])).toBe(true);
    });
    
  });
});
