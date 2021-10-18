function jumpingNumber(number){
  numArray = [...number+''].map(n=>+n);

  if(number.toString().length < 2){
    return 'Jumping!!';
  }
  for(let i in numArray){
    if(numArray[i] - 1 === Math.abs(1)){
      return 'Jumping!!';
    }
  }
  return 'Not!!';
}

module.exports = {
  jumpingNumber
};