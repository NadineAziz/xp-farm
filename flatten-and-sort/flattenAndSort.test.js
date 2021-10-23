const {flattenAndSort} = require('./flattenAndSort');

describe('Flatten and Sort Array', () => {
	
	describe('User Story 1:As an array with empty arrays I want to not do anything to return an empty array', () => {
		
		it('Scenario 1:Given an empty array [] when I try to flatten and sort it so that it gives back an empty array []',() => {
			expect(flattenAndSort([])).toStrictEqual([]);
		});
	})
	
})