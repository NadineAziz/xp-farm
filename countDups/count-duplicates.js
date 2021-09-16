function duplicateCount(text) {
  text = text.toLowerCase();
  const distinct = new Set();
  const duplicates = new Set();

  for (const i of text) {
    if (distinct.has(i)) {
      duplicates.add(i);
    } else {
      distinct.add(i);
    }
  }  
  return duplicates.size;
} 

module.exports = {
  duplicateCount,
};
