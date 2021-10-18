function jumpingNumber(number){
  if(number.toString().length < 2){
    return 'Jumping!!';
  }
  return 'Not!!';
}

module.exports = {
  jumpingNumber
};