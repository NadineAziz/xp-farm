const {whatIsBetween} = require('./whatIsBetween');

describe('What is between',() => {
	it('Should return the same numbers', () => {
		expect(whatIsBetween(1,2)).toStrictEqual([1,2]);
	});
	it('Should return from 0 to 5', () => {
		expect(whatIsBetween(0,5)).toStrictEqual([0,1,2,3,4,5]);
	});
	it('Should return negative to negative numbers', () => {
		expect(whatIsBetween(-5,0)).toStrictEqual([-5,-4,-3,-2,-1,0]);
	});
})