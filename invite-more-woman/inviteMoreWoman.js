function inviteMoreWoman(L){
	countWoman = 0;
	countMen = 0;
	for (const i in L) {
		if (L[i] === 1) {
			countMen++;
		}else{
			countWoman++;
		}
	}
	return checkGreater(countMen, countWoman,L);
}

function checkGreater(first,second,L){
	return first > second || L.length === 0 ? false : true;
}

module.exports = {
	inviteMoreWoman,
}
