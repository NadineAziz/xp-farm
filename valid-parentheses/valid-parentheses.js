function validParentheses(parens){
	if( parens.includes('(') && parens.includes(')') ){
		return true;
	}
	return false;
}

module.exports = {
	validParentheses
}