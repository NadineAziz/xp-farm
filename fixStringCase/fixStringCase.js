function fixStringCase(s) {
  return countUpperCase(s) === countLowerCase(s)
    ? s.toLowerCase()
    : countUpperCase(s) > countLowerCase(s)
    ? s.toUpperCase()
    : s.toLowerCase();
}

function countUpperCase(s) {
  return Array.from(s).filter((x) => x === x.toUpperCase()).length;
}

function countLowerCase(s) {
  return Array.from(s).filter((x) => x === x.toLowerCase()).length;
}

module.exports = {
  fixStringCase,
};
