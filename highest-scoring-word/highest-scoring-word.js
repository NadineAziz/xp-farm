function highestScoringWord(word) {
  let suma = 0;
  let sumb = 0;
  if (word === "a") suma = 1;
  if (word === "b") sumb = 2;
  console.log(suma);
  console.log(sumb);
  return word;
}

module.exports = {
  highestScoringWord,
};
