function jumpingNumber(number){
  numArray = [...number+''].map(n=>+n);
  if(number.toString().length < 2){
    return 'Jumping!!';
  }
  for(let i = 0; i < numArray.length; i++){
    if((numArray[i] - numArray[i+1]) === 1 || (numArray[i] - numArray[i+1]) === -1){
      return 'Jumping!!';
    }
  }
  return 'Not!!';
}
console.log(jumpingNumber(12));


module.exports = {
  jumpingNumber
};