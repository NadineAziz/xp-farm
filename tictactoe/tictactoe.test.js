const { Game, 
        drawBoard,
        switchPlayersTurns,
        switchPlayersCharacters,
        randomPosition,
        isRowFinished,
        isColumnFinished } = require("./tictactoe");

describe("TicTacToe", () => {
    describe('Board and Draw Board', () => {
        // it("Board - Gives an Empty Board", () => {
        //     expect(Game([])).toEqual([]);
        //   });
        //   it("Board - Gives a board with empty values", () => {
        //     expect(Game([0,1,2,3,4,5,6,7,8])).toEqual([0,1,2,3,4,5,6,7,8]);
        //   });
        
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

          it("Should return player character of player 1: X", () => {
              expect(switchPlayersCharacters(1)).toEqual('X');
          });

          it("Should return player character of player 2: O", () => {
            expect(switchPlayersCharacters(2)).toEqual('O');
        });
    });

    describe('Game players', () => {
        it("Should return a random position on the board", () => {
            testBoard = ['','','','','','','','',''];
            var reg = new RegExp('[0-8]');
            reg.test(randomPosition(testBoard));
          });

        it("Should return a random position on the board only if the position is empty", () => {
            testBoard = ['','X','','O','','X','','',''];
            var reg = new RegExp('[0-8]');
            reg.test(randomPosition(testBoard));
          });
    });

    describe('Win State', () => {
        it('Should return true when won by a row with X', () => {
            testBoard = ['X','X','X',
                         '','','O',
                         'O','','']
            expect(isRowFinished(testBoard)).toEqual(true);
        });
        it('Should return true when won by a row with O', () => {
            testBoard = ['X','X','',
                        'O','O','O'
                        ,'','','']
            expect(isRowFinished(testBoard)).toEqual(true);
        });
        it('Should return true when won by a column with X', () => {
            testBoard = ['X','','',
                         'X','O','O',
                         'X','','']
            expect(isColumnFinished(testBoard)).toEqual(true);
        })
    })

});
