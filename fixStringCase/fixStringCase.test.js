const { fixStringCase } = require("./fixStringCase");

describe("Fix String Case", () => {
  describe("User Story 1:As a single character case string I want to check the upper and lower case letters so that I change the word accordingly", () => {
    it(`Scenario 1:Given a single letter 'c' when I check the upper: lower case ratio then it returns 'c'`, () => {
      expect(fixStringCase("c")).toBe("c");
    });
    it(`Scenario 2:Given a 1 letter 'T' when I check the upper: lower case ratio then it returns 'T'`, () => {
      expect(fixStringCase("T")).toBe("T");
    });
  });
  describe("User Story 2:As a mixed case string I want to check the upper and lower case letters so that I change the word accordingly", () => {
    it(`Scenario 1:Given a string 'cs' when I check the upper: lower case ratio then it returns 'cs'`, () => {
      expect(fixStringCase("cs")).toBe("cs");
    });
    it(`Scenario 2:Given a string 'TO' when I check the upper: lower case ratio then it returns 'TO'`, () => {
      expect(fixStringCase("TO")).toBe("TO");
    });
    it(`Scenario 3:Given a string 'leT' when I check the upper: lower case ratio then it returns 'let'`, () => {
      expect(fixStringCase("leT")).toBe("let");
    });
    it(`Scenario 4:Given a string 'LEt' when I check the upper: lower case ratio then it returns 'LET'`, () => {
      expect(fixStringCase("LEt")).toBe("LET");
    });
    it(`Scenario 5:Given a string 'coDE' when I check the upper: lower case ratio then it returns 'code'`, () => {
      expect(fixStringCase("coDE")).toBe("code");
    });
  });
});
