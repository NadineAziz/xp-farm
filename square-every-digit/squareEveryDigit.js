function squareEveryDigit(num){
    let numbersArray = Array.from(String(num),Number);
	let outPutNum = numbersArray.map(x => Math.pow(x,2)).join('');

	return Number(outPutNum);
}
console.log(squareEveryDigit(32));
module.exports = {squareEveryDigit};