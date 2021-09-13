const { multiples3or5 } = require("./multiples-of-3-or-5");

describe('Multiples of 3 or 5', () => {
	it('Should return true if multiples of 3 up to a number' , () => {
		expect(multiples3or5(10)).toBe(18);
	});
	it('Should return true if multiples of 3 up to a number' , () => {
		expect(multiples3or5(20)).toBe(63);
	});
})