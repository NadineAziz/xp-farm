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
      expect(flattenAndSort([[2], []])).toStrictEqual([2]);
    });
  });

  describe("User Story 3:As an array with 2 numbers I want to flatten it so that it returns a single array", () => {
    it("Scenario 1: Given an array [[1], [2]] I want to flatten it to return a single array [1,2]", () => {
      expect(flattenAndSort([[1], [2]])).toStrictEqual([1, 2]);
    });

    it("Scenario 2: Given an array [[3],[4]] I want to flatten t to return a single array [3,4]", () => {
      expect(flattenAndSort([[3], [4]])).toStrictEqual([3, 4]);
    });
  });

  describe("User Story 4:As an array with numbers unsorted (same length) I want to flatten and sort it so that it returns a single sorted array", () => {
    it("Scenario 1: Given an array [[2], [1]] I want to flatten it and sort it to return a single array [1,2]", () => {
      expect(flattenAndSort([[2], [1]])).toStrictEqual([1, 2]);
    });
    it("Scenario 2: Given an array [[4,3],[1,2]] I want to flatten t to return a single array [1,2,3,4]", () => {
      expect(
        flattenAndSort([
          [4, 3],
          [1, 2],
        ])
      ).toStrictEqual([1, 2, 3, 4]);
    });
  });

  describe("User Story 5:As an array with numbers unsorted (different length) I want to flatten and sort it so that it returns a single sorted arrayUser Story 5:As an array with numbers unsorted (same length) I want to flatten and sort it so that it returns a single sorted array", () => {
    it("Scenario 1: Given an array [[5,2], [1]] I want to flatten it and sort it to return a single array [1,2,5]", () => {
      expect(flattenAndSort([[5, 2], [1]])).toStrictEqual([1, 2, 5]);
    });
    it("Scenario 2: Given an array [[4,8,2],[1,2]] I want to flatten t to return a single array [1,2,2,4,8]", () => {
      expect(
        flattenAndSort([
          [4, 8, 2],
          [1, 2],
        ])
      ).toStrictEqual([1, 2, 2, 4, 8]);
    });
    it("Scenario 3: Given an array [[3, 2, 1], [7, 9, 8], [6, 4, 5]] I want to flatten it and sort it to return a single array [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
      expect(
        flattenAndSort([
          [3, 2, 1],
          [7, 9, 8],
          [6, 4, 5],
        ])
      ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it("Scenario 4: Given an array [[1, 3, 5], [100], [2, 4, 6]] I want to flatten t to return a single array  [1, 2, 3, 4, 5, 6, 100]", () => {
      expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).toStrictEqual([
        1, 2, 3, 4, 5, 6, 100,
      ]);
    });
  });
});
