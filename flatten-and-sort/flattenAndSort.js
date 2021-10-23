function flattenAndSort(array) {
	flattenedArray = [].concat(...array);

	return flattenedArray.length === 0 ? [] : flattenedArray;
}

console.log(flattenAndSort([[],[]]));

module.exports = {
	flattenAndSort
} 