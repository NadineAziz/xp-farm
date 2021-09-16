const {duplicateCount} = require('./count-duplicates');

describe('Counting Duplicates', () => {

	it('Should return count of the repeated letter', () => {
		expect(duplicateCount('aaaaa')).toBe(1);
	});

	it('Should return 0 for non-repeated letters', () => {
		expect(duplicateCount('abcd')).toBe(0);
	});

	it('Should return correct count for repeated letters - mixed cases', () => {
		expect(duplicateCount('aabbcde')).toBe(2);
		expect(duplicateCount('indivisibility')).toBe(1);
		expect(duplicateCount('Indivisibilities')).toBe(2);
	});

	it('Should return correct count for repeated letters - capital cases', () => {
		expect(duplicateCount('ABBA')).toBe(2);
	});


	
})