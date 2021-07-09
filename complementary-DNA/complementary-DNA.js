function DNAStrand(dna) {
  let newStr = [];
  for (let i in dna) {
    if (dna[i] === "A") {
      newStr.push("T");
    } else if (dna[i] === "T") {
      newStr.push("A");
    } else if (dna[i] === "C") {
      newStr.push("G");
    } else if (dna[i] === "G") {
      newStr.push("C");
    } else {
      newStr.push(dna);
    }
  }
  return newStr.join().replace(/,/g, "");
}

module.exports = {
  DNAStrand,
};
