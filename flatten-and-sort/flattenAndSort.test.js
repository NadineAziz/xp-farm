const { flattenAndSort } = require("./flattenAndSort");

describe("Flatten and Sort Array", () => {
  describe("User Story 1:As an array with empty arrays I want to not do anything to return an empty array", () => {
    it("Scenario 1:Given an empty array [] when I try to flatten and sort it so that it gives back an empty array []", () => {
      expect(flattenAndSort([])).toStrictEqual([]);
    });

    it("Scenario 2:Given an empty array [[],[]] when I try to flatten and sort it then it gives back an empty array []", () => {
      expect(flattenAndSort([[], []])).toStrictEqual([]);
    });
  });

  describe("User Story 2:As an array with single number I want to flatten it so that it returns a single element array", () => {
    it("Scenario 1:Given a single element array [[],[1]] when I try to flatten and sort it then it gives back [1]", () => {
      expect(flattenAndSort([[], [1]])).toStrictEqual([1]);
    });
	it("Scenario 2:Given a single element array [[2],[]] when I try to flatten and sort it then it gives back [2]", () => {
		expect(flattenAndSort([[2],[]])).toStrictEqual([2]);
	  });
  });
});
