const {narcissistic} = require('./number-is-big-enough');

describe('Number is big enough', () => {
	
	it('Given that I have "1" as an input when I square it\'s\ digits then it passes',()=>{
		expect(narcissistic(1)).toBe(true);
	});

	it('Given that I have "2" as an input when I square it\'s\ digits then it passes',()=>{
		expect(narcissistic(2)).toBe(true);
	});

	it('Given that I have "13" as an input when I square it\'s\ digits then it fails',()=>{
		expect(narcissistic(13)).toBe(false);
	});

	it('Given that I have "24" as an input when I square it\'s\ digits then it fails',()=>{
		expect(narcissistic(24)).toBe(false);
	});

	it('Given that I have "153" as an input when I square it\'s\ digits then it fails',()=>{
		expect(narcissistic(153)).toBe(true);
	});

	it('Given that I have "370" as an input when I square it\'s\ digits then it fails',()=>{
		expect(narcissistic(370)).toBe(true);
	});

	it('Given that I have "322" as an input when I square it\'s\ digits then it fails',()=>{
		expect(narcissistic(322)).toBe(false);
	});

	it('Given that I have "1634" as an input when I square it\'s\ digits then it fails',()=>{
		expect(narcissistic(1634)).toBe(true);
	});

	it('Given that I have "8208" as an input when I square it\'s\ digits then it fails',()=>{
		expect(narcissistic(8208)).toBe(true);
	});

	it('Given that I have "8218" as an input when I square it\'s\ digits then it fails',()=>{
		expect(narcissistic(8218)).toBe(false);
	});

	it('Given that I have "92727" as an input when I square it\'s\ digits then it fails',()=>{
		expect(narcissistic(92727)).toBe(true);
	});

	it('Given that I have "1741725" as an input when I square it\'s\ digits then it fails',()=>{
		expect(narcissistic(1741725)).toBe(true);
	});

	it('Given that I have "1742725" as an input when I square it\'s\ digits then it fails',()=>{
		expect(narcissistic(1742725)).toBe(false);
	});
})