function highestScoringWord(word) {
  const strings = word.split(" ");
  let map = new Map();
  let counter = 0;

  for (let i in strings) {
    if (strings[i].includes("a")) {
      counter += 1;
    } else if (strings[i].includes("b")) {
      counter += 2;
    } else if (strings[i].includes("c")) {
      counter += 3;
    }
    map.set(strings[i], counter);
  }

  return maxKeyInMap(map);
}

function maxKeyInMap(map) {
  return [...map.entries()].reduce((x, y) => (x[1] > y[1] ? x : y))[0];
}

module.exports = {
  highestScoringWord,
};
