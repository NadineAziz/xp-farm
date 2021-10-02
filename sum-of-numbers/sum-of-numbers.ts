function sumOfNumbers(a, b) {
  return a === b ? a : notEqual(a, b);
}

function notEqual(a, b) {
  let sum = 0;

  if (a < b) {
    for (; a <= b; a++) {
      sum += a;
    }
  } else if (a > b) {
    for (; b <= a; b++) {
      sum += b;
    }
  }
  return sum;
}

module.exports = { sumOfNumbers };
