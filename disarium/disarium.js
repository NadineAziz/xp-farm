function disarium(number) {
  return sumOfNumArrayPow(fromNumToArr(number)) === number
    ? "Disarium !!"
    : "Not !!";
}

function fromNumToArr(number) {
  var output = [],
    sNumber = number.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }
  return output;
}

function sumOfNumArrayPow(numArray) {
  let sum = 0;
  for (var i = 0; i < numArray.length; i++) {
    sum += Math.pow(numArray[i], i + 1);
  }
  return sum;
}

module.exports = {
  disarium,
};
