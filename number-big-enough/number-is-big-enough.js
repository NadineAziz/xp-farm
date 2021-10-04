function narcissistic(value) {
	let digits = [...value+''].map(n=>+n);
	let squares = digits.map(x => Math.pow(x,digits.length)).reduce((a, b) => a + b, 0);

	return squares === value;
}

console.log(narcissistic(13));
module.exports = {
	narcissistic
}
  
