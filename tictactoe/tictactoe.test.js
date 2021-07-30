const { Game } = require("./tictactoe");

describe("TicTacToe", () => {
  it("Empty Board", () => {
    expect(Game()).toEqual([]);
  });
});
