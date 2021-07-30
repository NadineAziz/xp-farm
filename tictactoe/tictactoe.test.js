const { Game, drawBoard,switchPlayersTurns } = require("./tictactoe");

describe("TicTacToe", () => {
    describe('Board and Draw Board', () => {
        it("Board - Gives an Empty Board", () => {
            expect(Game([])).toEqual([]);
          });
          it("Board - Gives a board with empty values", () => {
            expect(Game([0,1,2,3,4,5,6,7,8])).toEqual([0,1,2,3,4,5,6,7,8]);
          });
        
        // it("Draw board - draw board as a tictactoe board", () => {
        //         testBoard = ['','','','','','','','','']
        //         expect(drawBoard(testBoard)).toEqual(`        |  ${testBoard[0]}  |  ${testBoard[1]}  |  ${testBoard[2]} \n
        //         ----------- \n
        //         |  ${testBoard[3]}  |  ${testBoard[4]}  |  ${testBoard[5]} \n
        //         ----------- \n
        //         |  ${testBoard[6]}  | ${testBoard[7]}   | ${testBoard[8]} \n
        //     ` );
        //     });
    });

    describe('Game players', () => {
        it("Should return which player turn is it", () => {
            expect(switchPlayersTurns(1)).toEqual(1);
          });

          it("Should return player character", () => {
              expect(switchPlayersCharacters(1)).toEqual('X');
          })
    })

});
