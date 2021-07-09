
const { DNAStrand } = require('./complementary-DNA');

describe("DNA Strand", ()=>{
    it("Should return same letter", () => {
        expect(DNAStrand('A')).toBe('A');
    })
})