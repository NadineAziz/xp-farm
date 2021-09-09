const {whatIsBetween} = require('./whatIsBetween');

describe('What is between',() => {
	it('Should return the same numbers', () => {
		expect(whatIsBetween(1,2)).toStrictEqual([1,2]);
	})
})