function flattenAndSort(array) {
	return [].concat(...array).sort((a,b) => a-b);
}
module.exports = {
	flattenAndSort
} 