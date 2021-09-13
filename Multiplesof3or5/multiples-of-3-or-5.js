function multiples3or5 (num) {
	let set = new Set();
	let sum = 0;

	for (let i = 0; i < num; i++) {
	  if (i % 3 === 0 || i % 5 === 0) {
		set.add(i);
	  }
	}

	for(let i of set){
		sum+=i;
	}
	return sum;
}

console.log(multiples3or5(10));
module.exports = {
	multiples3or5
}