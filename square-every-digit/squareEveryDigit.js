function squareEveryDigit(num){
    let numbersArray = Array.from(String(num),Number);

	return numbersArray.map(x => Math.pow(x,2)).join('');
}

module.exports = {squareEveryDigit};