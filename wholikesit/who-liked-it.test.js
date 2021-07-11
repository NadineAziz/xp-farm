const { whoLikesIt } = require("./who-liked-it");

describe("Who Likes It Test", () => {
  it("Return An Empty array", () => {
    names = [];
    expect(whoLikesIt(names)).toStrictEqual([]);
  });
});
