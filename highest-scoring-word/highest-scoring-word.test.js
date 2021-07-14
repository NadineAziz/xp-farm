const { highestScoringWord } = require("./highest-scoring-word");

describe("Highest Scoring Word", () => {
  describe("Basic functionality", () => {
    it("Should take a letter and return same letter", () => {
      expect(highestScoringWord("a")).toBe("a");
    });
  });

  describe("Should give back sum of each letter", () => {
    it("Should take letter a and on console print 1, return a", () => {
      expect(highestScoringWord("a")).toBe("a");
    });
  });
});
