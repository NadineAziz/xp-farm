function areTheyTheSame(array1, array2) {
	let booleanArr = [];
	for(let i in array1) {
		for(let j in array2) {
			if(array1.includes(Math.sqrt(array2[j]))){
				booleanArr.push(true);
			}else{
				booleanArr.push(false);
			}
		}
	}
	for(let i in booleanArr){
		if(booleanArr.includes(false)){
			return false;
		}
	}
	return true;
}

// console.log(areTheyTheSame([121, 144, 19, 161, 19, 144, 19, 11],[132, 14641, 20736, 361, 25921, 361, 20736, 361]));
console.log(areTheyTheSame([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
module.exports = {
	areTheyTheSame
}