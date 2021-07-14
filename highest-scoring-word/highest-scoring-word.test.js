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
    it("Should take characters aaa returning 3", () => {
      expect(highestScoringWord("aaa")).toBe(3);
    });
    it("Should take characters bbb returning 6", () => {
      expect(highestScoringWord("bbb")).toBe(6);
    });
    it("Should take characters ccc returning 9", () => {
      expect(highestScoringWord("ccc")).toBe(9);
    });
    it("Should take characters abc returning 6", () => {
      expect(highestScoringWord("abc")).toBe(6);
    });
  });

  describe("Should include other letters word", () => {
    it("Should take characters f returning 0", () => {
      expect(highestScoringWord("f")).toBe(0);
    });
    it("Should take characters abvjcsbba returning 11", () => {
      expect(highestScoringWord("abvjcsbba")).toBe(11);
    });
  });
  describe("Should include sentences with space", () => {
    it("Should take sentence 'xp farm' returning farm", () => {
      expect(highestScoringWord("xp farm")).toBe("farm");
    });
  });
});
