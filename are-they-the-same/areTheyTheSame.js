function areTheyTheSame(array1, array2) {
	for(let i in array1) {
		for(let j in array2) {
			if(array1[i] === array2[j]){
				return true;
			}
		}
	}
	return false;
}


module.exports = {
	areTheyTheSame
}