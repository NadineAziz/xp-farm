function DNAStrand(dna){
    if(dna === 'A'){
      return dna.replace(dna,'T');
    }else if (dna === 'T'){
        return dna.replace(dna,'A');
    }

    return dna;
}

module.exports = {
    DNAStrand
}