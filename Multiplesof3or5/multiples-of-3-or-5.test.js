const { multiples3or5 } = require("./multiples-of-3-or-5");

describe('Multiples of 3 or 5', () => {
	it('Should return 3 if given 3' , () => {
		expect(multiples3or5(3)).toBe(0);
	});
	it('Should return 23 if given 10' , () => {
		expect(multiples3or5(10)).toBe(23);
	});

	it('Should return 8 if given 8' , () => {
		expect(multiples3or5(8)).toBe(14);
	});

	it('Should return 195 if given 30' , () => {
		expect(multiples3or5(50)).toBe(543);
	});

	it('Should return 2 if given 0' , () => {
		expect(multiples3or5(2)).toBe(0);
	});

	it('Should return 120 if given 30' , () => {
		expect(multiples3or5(120)).toBe(3300);
	});
	
})