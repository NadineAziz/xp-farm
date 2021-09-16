const {duplicateCount} = require('./count-duplicates');

describe('Counting Duplicates', () => {

	it('Should return the text in lower case', () => {
		expect(duplicateCount('AABbbb')).toBe('aabbbb');
	})
})