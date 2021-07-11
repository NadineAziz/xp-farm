const { whoLikesIt } = require("./who-liked-it");

describe("Who Likes It Test", () => {
  it("Return 'no one likes this' ", () => {
    expect(whoLikesIt([])).toBe("no one likes this");
  });
  it("Give one name, should return 'name likes this' ", () => {
    expect(whoLikesIt(["Nadeen"])).toBe("Nadeen likes this");
  });
  it("Give two names, should return 'name1 and name2 like this' ", () => {
    expect(whoLikesIt(["Nadeen", "Griffin"])).toBe(
      "Nadeen and Griffin like this"
    );
  });
  it("Give three names, should return 'name1, name2, and name3 like this' ", () => {
    expect(whoLikesIt(["Nadeen", "Griffin", "Louis"])).toBe(
      "Nadeen, Griffin and Louis like this"
    );
  });
  it("Give four names, should return 'name1, name2, name3 and 1 other like this' ", () => {
    expect(whoLikesIt(["Nadeen", "Griffin", "Louis", "Justin"])).toBe(
      "Nadeen, Griffin, Louis and 1 other like this"
    );
  });
  it("Give five names, should return 'name1, name2, name3 and 2 others like this' ", () => {
    expect(whoLikesIt(["Nadeen", "Griffin", "Louis", "Justin", "Sandy"])).toBe(
      "Nadeen, Griffin, Louis and 2 others like this"
    );
  });
  it("Give eight names, should return 'name1, name2, name3 and 5 others like this' ", () => {
    expect(
      whoLikesIt([
        "Nadeen",
        "Griffin",
        "Louis",
        "Justin",
        "Sandy",
        "Six",
        "Seven",
        "Eight",
      ])
    ).toBe("Nadeen, Griffin, Louis and 5 others like this");
  });
});
