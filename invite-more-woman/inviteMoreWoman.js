function inviteMoreWoman(L){
	countWoman = 0;
	countMen = 0;
	for (const i in L) {
		if (L[i] === 1) {
			countMen++;
			console.log("Men " + countMen);
		}else{
			countWoman++;
			console.log("Women " + countMen);
		}
	}
	return checkGreater(countMen, countWoman,L);
}

console.log(inviteMoreWoman([1,-1,1]));

function checkGreater(first,second,L){
	return first > second || L.length === 0 ? true : false;
}

module.exports = {
	inviteMoreWoman,
}
