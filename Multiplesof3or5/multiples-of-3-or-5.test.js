const { multiples3or5 } = require("./multiples-of-3-or-5");

describe('Multiples of 3 or 5', () => {
	it('Should return same number', () => {
		expect(multiples3or5(1)).toBe(1);
	})
})