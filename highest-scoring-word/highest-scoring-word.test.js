const { highestScoringWord } = require("./highest-scoring-word");

describe("Highest Scoring Word", () => {
  //   describe("Basic functionality", () => {
  //     it("Should take a letter and return same letter", () => {
  //       expect(highestScoringWord("a")).toBe("a");
  //     });
  //   });

  describe("Should give back sum of each letter", () => {
    it("Should take letter a returning a", () => {
      expect(highestScoringWord("a")).toBe("a");
    });
    it("Should take letter b returning b", () => {
      expect(highestScoringWord("b")).toBe("b");
    });
    it("Should take letter c returning c", () => {
      expect(highestScoringWord("c")).toBe("c");
    });
  });
  describe("Should give back an accumulative counter of each letter", () => {
    it("Should take characters aaa returning aaa", () => {
      expect(highestScoringWord("aaa")).toBe("aaa");
    });
    it("Should take characters bbb returning bbb", () => {
      expect(highestScoringWord("bbb")).toBe("bbb");
    });
    it("Should take characters ccc returning ccc", () => {
      expect(highestScoringWord("ccc")).toBe("ccc");
    });
    it("Should take characters abc returning abc", () => {
      expect(highestScoringWord("abc")).toBe("abc");
    });
  });

  describe("Should include other letters word", () => {
    it("Should take characters f returning 0", () => {
      expect(highestScoringWord("f")).toBe("f");
    });
    it("Should take characters abvjcsbba returning abvjcsbba", () => {
      expect(highestScoringWord("abvjcsbba")).toBe("abvjcsbba");
    });
  });
  describe("Should include sentences with space", () => {
    it("Should take sentence 'xp farm' returning farm", () => {
      expect(highestScoringWord("xp farm")).toBe("farm");
    });
    it("Should take sentence 'man i need a taxi up to ubud' returning taxi", () => {
      expect(highestScoringWord("man i need a taxi up to ubud")).toBe("ubud");
    });
    it("Should take sentence 'what time are we climbing up the volcano' returning taxi", () => {
      expect(
        highestScoringWord("what time are we climbing up the volcano")
      ).toBe("volcano");
    });
    it("Should take sentence 'take me to semynak' returning taxi", () => {
      expect(highestScoringWord("take me to semynak")).toBe("semynak");
    });
  });
});
