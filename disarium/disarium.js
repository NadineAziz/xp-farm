function disarium(number) {
  return sumOfNumArray(fromNumToArr(number)) === number ? 'Disarium !!' : 'Not !!';
}

function fromNumToArr(number) {
  var output = [],
    sNumber = number.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }
  return output;
}

function sumOfNumArray(numArray) {
  for (var i = 0, sum = 0; i < numArray.length; sum += numArray[i++]);
  return sum;
}

module.exports = {
  disarium,
};
