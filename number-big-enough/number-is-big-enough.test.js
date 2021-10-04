const {narcissistic} = require('./number-is-big-enough');

describe('Number is big enough', () => {
	
	it('Given that I have "1" as an input when I square it\'s\ digits then it passes',()=>{
		expect(narcissistic(1)).toBe(true);
	});

	it('Given that I have "2" as an input when I square it\'s\ digits then it passes',()=>{
		expect(narcissistic(2)).toBe(true);
	});
})