function flattenAndSort(array) {
	flattenedArray = [].concat(...array);

	return flattenedArray.length === 0 ? [] : sortNumbers(flattenedArray);
}

function sortNumbers (array) {
	return array.sort((a,b) => a-b);
}
module.exports = {
	flattenAndSort
} 