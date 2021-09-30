const {areTheyTheSame} = require('./areTheyTheSame');

describe('Are they the same?', () => {
	
	describe('User Story 1: Arrays with single elements', () => {
		it('should return false when both arrays are empty', () => {
			expect(areTheyTheSame([],[])).toBe(false);
		})
	})
})