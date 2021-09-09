const { whatIsBetween }  = require( "./whatIsBetween");

describe('WhatsInBetween',() => {
	it('should return same number', () => {
		expect(whatIsBetween(1,2)).toStrictEqual([1,2]);
	})
})