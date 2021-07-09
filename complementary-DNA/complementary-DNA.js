function DNAStrand(dna) {
  if (dna === "A") {
    return dna.replace(dna, "T");
  } else if (dna === "T") {
    return dna.replace(dna, "A");
  } else if (dna === "C") {
    return dna.replace(dna, "G");
  }

  return dna;
}

module.exports = {
  DNAStrand,
};
