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

  describe("User Story 2:As a double digit number When I want to power it and add the digit So that I check if it's a Disarium or not", () => {
    it('Scenario 1: Given a double digit 10 when I power it then it is not a Disarium (gives "Not !!")', () => {
      expect(disarium(10)).toBe("Not !!");
    });
    it('Scenario 2: Given a single digit 34 when I power it then it is not a Disarium (gives "Not !!")', () => {
      expect(disarium(34)).toBe("Not !!");
    });
    it('Scenario 3: Given a double digit 89 when I power it then it is a Disarium (gives "Disarium !!")', () => {
      expect(disarium(89)).toBe("Disarium !!");
    });
  });

  describe("User Story 3:As a triple digit number When I want to power it and add the digit So that I check if it's a Disarium or not", () => {
    it('Scenario 1: Given a triple digit 200 when I power it then it is not a Disarium (gives "Not !!")', () => {
      expect(disarium(200)).toBe("Not !!");
    });
	it('Scenario 2: Given a triple digit 135 when I power it then it is a Disarium (gives "Disarium !!")', () => {
		expect(disarium(135)).toBe("Disarium !!");
	  });

	  it('Scenario 3: Given a triple digit 849 when I power it then it is not a Disarium (gives "Not !!")', () => {
		expect(disarium(849)).toBe("Not !!");
	  });
  });
});
