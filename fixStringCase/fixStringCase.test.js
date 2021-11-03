const {fixStringCase} = require('./fixStringCase');

describe('Fix String Case', () => {
	
	describe('User Story 1:As a single character case string I want to check the upper and lower case letters so that I change the word accordingly',() => {

		it(`Scenario 1:Given a single letter 'c' when I check the upper: lower case ratio then it returns 'c'`,() => {
			expect(fixStringCase('c')).toBe('c');
		})
	});
})
