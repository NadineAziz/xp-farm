const { Game } = require("./tictactoe");

describe("TicTacToe", () => {
  it("Board - Gives an Empty Board", () => {
    expect(Game()).toEqual([]);
  });
  it("Board - Gives a board with empty values", () => {
    expect(Game()).toEqual(['','','','','','','','','']);
  });

    it("Draw board - draw board as a tictactoe board", () => {
        testBoard = ['','','','','','','','','']
        expect(drawBoard(testBoard)).toEqual([
            `'  | ' ${newBoard[0]} ' | ' ${newBoard[1]} ' | ' ${newBoard[2]} '\n',
    '----------- \n',
    ' | ' ${newBoard[3]} ' | ' ${newBoard[4]} ' | ' ${newBoard[5]} '\n',
    '----------- \n',
    ' | ' ${newBoard[6]} + ' | ' ${newBoard[7]}' | ' ${newBoard[8]} '\n'` 
        ]);
    });

});
