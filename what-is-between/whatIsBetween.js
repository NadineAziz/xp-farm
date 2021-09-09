function whatIsBetween(a,b){
	let arr = [];
	let i = a;
	while(i <= b){
		arr.push(i);
		i++;
	}
	return arr;
}

module.exports = {
	whatIsBetween
}