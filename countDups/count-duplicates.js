function duplicateCount(text){
	text = text.toLowerCase();
	let count = 0;

	for(let i=0;i<text.length;i++){
		if(text[i] === text[i+1]){
			count++;
		}
	}

	return count;
}

module.exports = {
	duplicateCount,
  };
