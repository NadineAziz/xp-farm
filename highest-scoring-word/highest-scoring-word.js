function highestScoringWord(word) {
  let suma = 0;
  let sumb = 0;
  let sumc = 0;
  if (word === "a") suma = 1;
  if (word === "b") sumb = 2;
  if (word === "c") sumc = 3;
  console.log(suma);
  console.log(sumb);
  console.log(sumc);
  return word;
}

module.exports = {
  highestScoringWord,
};
