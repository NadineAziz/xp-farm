function flattenAndSort(array) {
	flattenedArray = [].concat(...array);

	return flattenedArray.length === 0 ? [] : flattenedArray.sort((a,b) => a-b);
}

//console.log(flattenAndSort([[3],[2]]));

module.exports = {
	flattenAndSort
} 