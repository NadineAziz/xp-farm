function highestScoringWord(word) {
  let counter = 0;
  for (let i in word) {
    if (word[i] === "a") {
      counter += 1;
    } else if (word[i] === "b") {
      counter += 2;
    } else if (word[i] === "c") {
      counter += 3;
    }
  }
  return counter;
}

function consoleLogging(sum) {
  return sum;
}

module.exports = {
  highestScoringWord,
  consoleLogging,
};
