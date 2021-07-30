function Game() {
  return board = ['','','','','','','','',''];
}


function drawBoard(board){
    return `'  | ' ${newBoard[0]} ' | ' ${newBoard[1]} ' | ' ${newBoard[2]} '\n',
    '----------- \n',
    ' | ' ${newBoard[3]} ' | ' ${newBoard[4]} ' | ' ${newBoard[5]} '\n',
    '----------- \n',
    ' | ' ${newBoard[6]} + ' | ' ${newBoard[7]}' | ' ${newBoard[8]} '\n'` 
                
}

module.exports = {
    Game,
  };