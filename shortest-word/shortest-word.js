function shortestWord(sentence) {
  return Math.min(...sentence.split(" ").map(s => s.length));
}
module.exports = {
  shortestWord,
};
