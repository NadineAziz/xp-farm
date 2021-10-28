const { shortestWord } = require("./shortest-word");

describe("Shortest Word", () => {
  describe("User Story 1: As shortest word finder I want to count the length of each word in the sentence so that I find the minimum length", () => {
    it("Scenario 1: Given a sentence with 1 word  ['w'] when I find the minimum length then I get length = 1", () => {
		expect(shortestWord('w')).toBe(1);
	});
	it("Scenario 2: Given a sentence with 2 words ['cv np'] with the same length when I find the minimum length then I get length = 2", () => {
		expect(shortestWord('cv np')).toBe(2);
	});
  });
});
