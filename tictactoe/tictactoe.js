let board = [0,1,2,3,4,5,6,7,8];
let player = 1;
function Game(board) {

    switchPlayersTurns(player);

    switchPlayersCharacters(player);

    // /console.log(drawBoard(board));
    return board;
}

// Added x-1 because it should not exceed out of the 9th position
function randomPosition(board){
    let x = Math.round(Math.random() * board.length);

    while( typeof(board[x-1]) === 'string'){
        x = Math.round(Math.random() * board.length)
    };

    return x-1;
}
function switchPlayersTurns(player) {
    if(player%2 === 1)
         player = 1;
     else
         player = 2;
 
     return player;
 }

 function switchPlayersCharacters(player){
    let char;
    if(player === 1)
        char = 'X'
    else
        char = 'O'
    
    return char;
 }

function drawBoard(board){
    const newBoard = board.map(x => prettyPrint(x));
    return `        |  ${newBoard[0]}  |  ${newBoard[1]}  |  ${newBoard[2]} \n
        ----------- \n
        |  ${newBoard[3]}  |  ${newBoard[4]}  |  ${newBoard[5]} \n
        ----------- \n
        |  ${newBoard[6]}  | ${newBoard[7]}   | ${newBoard[8]} \n
    `               
}

function prettyPrint(cell){
    if (typeof(cell) === 'number'){
        return '';
    } else {
        return cell;
    }
}

Game(board);
module.exports = {
    Game,
    drawBoard,
    player,
    switchPlayersTurns,
    switchPlayersCharacters,
    randomPosition
  };