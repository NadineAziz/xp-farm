function shortestWord(sentence) {
  sentenceArray = sentence.split(" ");
  sentence = sentenceArray.sort((a, b) => a.length - b.length);
  return sentence[0].length;
}
module.exports = {
  shortestWord,
};
