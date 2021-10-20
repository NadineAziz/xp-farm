const {twoToOne} = require('./twoToOne');

describe('Two to One', () => {
	describe('User Story 1:As I have 2 strings with single letters I want to apply a function on them so that I get a sorted unique list.',() => {
		it(`Scenario 1:Given strings a and b when I sort/unique them then it should return 'ab'`,() => {
			expect(twoToOne('a','b')).toBe('ab');
		});
		it(`Scenario 2:Given strings c and d when I sort/unique them then it should return 'cd'`,() => {
			expect(twoToOne('c','d')).toBe('cd');
		});
	});

	describe('User Story 2:As I have 2 strings with double letters I want to apply a function on them so that I get a sorted unique list.',() => {
		it(`Scenario 1:Given strings ab and cd when I sort/unique them then it should return 'abcd'
		`,() => {
			expect(twoToOne('ab','cd')).toBe('abcd');
		});
		it(`Scenario 2:Given strings ab and bd when I sort/unique them then it should return 'abd'`,() => {
			expect(twoToOne('ab','bd')).toBe('abd');
		});
	})
})