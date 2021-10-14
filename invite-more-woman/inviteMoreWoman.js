function inviteMoreWoman(L){
	arrWoman = [];
	arrMen = [];
	for (const i in L) {
		if (L[i] === 1) {
			arrMen.push(i);
		}else if (L[i] === -1) {
			arrWoman.push(i);
		}
	}
	if((arrMen.length > arrWoman.length) || L.length === 0) return false;
	return true;
}

module.exports = {
	inviteMoreWoman,
}
