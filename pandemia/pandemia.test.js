const {pandemia} = require('./pandemia');

describe('Pandemia',()=>{
	it('Given a map with 0 when I want to find the percentage then I give 0%',() => {
		expect(pandemia('0')).toBe(0);
	});

	it('Given a map with X when I want to find the percentage then I give 0%',() => {
		expect(pandemia('X')).toBe(0);
	})
})