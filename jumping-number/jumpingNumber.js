function jumpingNumber(number){
  numArray = [...number+''].map(n=>+n);
  if(number.toString().length < 2){
    return 'Jumping!!';
  }
  for(let i = 1; i < numArray.length; i++){
    if(Math.abs((numArray[i] - numArray[i-1])) !== 1){
      return 'Not!!';
    }
  }
  return 'Jumping!!';
}
console.log(jumpingNumber(21))
module.exports = {
  jumpingNumber
};