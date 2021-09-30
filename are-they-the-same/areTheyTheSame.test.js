const { areTheyTheSame } = require("./areTheyTheSame");

describe("Are they the same?", () => {
  describe("User Story 1: Arrays with Initial elements", () => {
    it("Scenario 1 : should return false when both arrays are empty", () => {
      expect(areTheyTheSame([], [])).toBe(false);
    });

    it("Scenario 2 & 3 : should return true when both numbers are equal", () => {
      expect(areTheyTheSame([1],[1])).toBe(true);
      expect(areTheyTheSame([2],[2])).toBe(false);
    });
    
    it("Scenario 4 : should return true when both arrays have equal elements", () => {
      expect(areTheyTheSame([2,3,4],[2,1])).toBe(false);
    });

    it("Scenario 5 : Given 2 arrays a=[2] b=[4] when I try to compare them then gives true", () => {
      expect(areTheyTheSame([2],[4])).toBe(true);
    });

    it("Scenario 6 : Given 2 arrays a=[3] b=[1] when I try to compare them then gives true", () => {
      expect(areTheyTheSame([3],[1])).toBe(false);
    });
  });
});
