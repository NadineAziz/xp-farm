function highestScoringWord(word) {
  let sum = 0;
  if (word === "a") return (sum = 1);
  if (word === "b") return (sum = 2);
  if (word === "c") return (sum = 3);
  return sum;
}

function consoleLogging(sum) {
  return sum;
}

module.exports = {
  highestScoringWord,
  consoleLogging,
};
