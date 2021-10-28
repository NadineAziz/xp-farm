function shortestWord(sentence) {
  sentenceArray = sentence.split(" ");
  minLength = sentenceArray[0].length;
  for (let i in sentenceArray) {
    if (sentenceArray[i].length < minLength) {
      minLength = sentenceArray[i].length;
    }
  }
  return minLength;
}
module.exports = {
  shortestWord,
};
