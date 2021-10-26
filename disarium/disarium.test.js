const { disarium } = require("./disarium");

describe("Disarium", () => {
  describe("User Story 1:As a single digit number When I want to power it and add the digit So that I check if it's a Disarium or not", () => {
    it('Scenario 1: Given a single digit 1 when I power it then it is a Disarium (gives "Disarium !!")', () => {
      expect(disarium(1)).toBe("Disarium !!");
    });

    it('Scenario 2: Given a single digit 7 when I power it then it is a Disarium (gives "Disarium !!")', () => {
      expect(disarium(7)).toBe("Disarium !!");
    });
  });
});
