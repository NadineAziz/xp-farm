const {duplicateCount} = require('./count-duplicates');

describe('Counting Duplicates', () => {

	// it('Should return the text in lower case', () => {
	// 	expect(duplicateCount('AABbbb')).toBe('aabbbb');
	// 	expect(duplicateCount('TABles')).toBe('tables');
	// });

	it('Should return count of the repeated letter', () => {
		expect(duplicateCount('aaaaa')).toBe(5);
		expect(duplicateCount('aaaaabb')).toBe(5);
	});

	
})