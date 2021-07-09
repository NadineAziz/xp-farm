const { DNAStrand } = require("./complementary-DNA");

describe("DNA Strand", () => {
  it("Should return same letter", () => {
    expect(DNAStrand("B")).toBe("B");
  });

  it("Should flip A to T", () => {
    expect(DNAStrand("A")).toBe("T");
  });

  it("Should flip T to A", () => {
    expect(DNAStrand("T")).toBe("A");
  });

  it("Should flip C to G", () => {
    expect(DNAStrand("C")).toBe("G");
  });
  it("Should flip G to C", () => {
    expect(DNAStrand("G")).toBe("C");
  });
  it("Should flip AATT to TTAA", () => {
    expect(DNAStrand("AATT")).toBe("TTAA");
  });
});
