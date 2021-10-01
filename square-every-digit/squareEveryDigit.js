function squareEveryDigit(num){
    let numbersArray = Array.from(String(num),Number);
	let outPutArray = [];

	for(let i in numbersArray){
		outPutArray.push(Math.pow(numbersArray[i],2));
	}
	return outPutArray.join('');
}

module.exports = {squareEveryDigit};