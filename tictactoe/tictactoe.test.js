const { Game } = require("./tictactoe");

describe("TicTacToe", () => {
  it("Gives an Empty Board", () => {
    expect(Game()).toEqual([]);
  });
  it("Gives a board with empty values", () => {
    expect(Game()).toEqual(['','','','','','','','','']);
  });
});
