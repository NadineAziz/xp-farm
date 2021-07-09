
const { DNAStrand } = require('./complementary-DNA');

describe("DNA Strand", ()=>{
    it("Should return same letter", () => {
        expect(DNAStrand('B')).toBe('B');
    })

    it("Should flip A to T", () => {
        expect(DNAStrand('A')).toBe('T');
    })

    it("Should flip T to A", () => {
        expect(DNAStrand('T')).toBe('A');
    })

})