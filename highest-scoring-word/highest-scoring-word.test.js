const {
  highestScoringWord,
  consoleLogging,
} = require("./highest-scoring-word");

describe("Highest Scoring Word", () => {
  //   describe("Basic functionality", () => {
  //     it("Should take a letter and return same letter", () => {
  //       expect(highestScoringWord("a")).toBe("a");
  //     });
  //   });

  describe("Should give back sum of each letter", () => {
    it("Should take letter a returning 1", () => {
      expect(highestScoringWord("a")).toBe(1);
    });
    it("Should take letter b returning 2", () => {
      expect(highestScoringWord("b")).toBe(2);
    });
    it("Should take letter c returning 3", () => {
      expect(highestScoringWord("c")).toBe(3);
    });
  });
  describe("Should give back an accumulative counter of each letter", () => {
    it("Should take letter aaa returning 3", () => {
      expect(highestScoringWord("aaa")).toBe(3);
    });
    it("Should take letter bbb returning 6", () => {
      expect(highestScoringWord("bbb")).toBe(6);
    });
    it("Should take letter ccc returning 9", () => {
      expect(highestScoringWord("ccc")).toBe(9);
    });
  });
});
