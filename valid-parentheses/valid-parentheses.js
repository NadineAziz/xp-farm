function validParentheses(parens) {
  var flag = 0;

  for (var i = 0; i < parens.length && flag >= 0; i++) {
    if (parens[i] === "(") {
      flag += 1;
    } else {
      flag += -1;
    }
  }

  return flag === 0;
}

module.exports = {
  validParentheses,
};
