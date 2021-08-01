const { Game, 
        drawBoard,
        switchPlayersTurns,
        switchPlayersCharacters,
        randomPosition,
        isRowFinished,
        isColumnFinished,
        isDiagonalFinished,
        isStillOnPlay } = require("./tictactoe");

describe("TicTacToe", () => {
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
        it('Should return true when won by a row with X', () => {
            testBoard = ['O','X','X',
                         'O','','O',
                         'X','X','X']
            expect(isRowFinished(testBoard)).toEqual(true);
        });
        it('Should return true when won by a column with X', () => {
            testBoard = ['X','','',
                         'X','O','O',
                         'X','','']
            expect(isColumnFinished(testBoard)).toEqual(true);
        });
        it('Should return true when won by a column with O', () => {
            testBoard = ['X','O','',
                         '','O','O',
                         'X','O','X']
            expect(isColumnFinished(testBoard)).toEqual(true);
        });
        it('Should return true when won by a column with X', () => {
            testBoard = ['X','O','X',
                         '','O','X',
                         'O','X','X']
            expect(isColumnFinished(testBoard)).toEqual(true);
        });
        it('Should return true when won by a diagonal with X', () => {
            testBoard = ['X','O','X',
                         '','X','O',
                         'O','X','X']
            expect(isDiagonalFinished(testBoard)).toEqual(true);
        });
        it('Should return true when won by a diagonal with O', () => {
            testBoard = ['X','O','O',
                         '','O','O',
                         'O','X','X']
            expect(isDiagonalFinished(testBoard)).toEqual(true);
        });  
    });

    describe('Game Ongoing', () => {
        
        it("Should return true if the game has ended with a win", () => {
                testBoard = ['X','X','X','','','','','',''];
                expect(isStillOnPlay(testBoard)).toEqual(true);
        });

        it("Should return false if the game has ended with a draw", () => {
            testBoard = ['X','X','O',
                        'O','O','X',
                        'X','O','X'];
            expect(isStillOnPlay(testBoard)).toEqual(false);
        });
    
    })

});
