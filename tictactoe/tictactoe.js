let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let player = 1;
let movePosition;
let state = -1;

async function Game(board) {
  console.log(`Game Board Creation: \n The game will start with player X`);

  while (state === -1) {
    console.log(drawBoard(board));

    player = switchPlayersTurns(player);
    console.log(`${switchPlayersCharacters(player)}'s Turn`);
    movePosition = randomPosition(board);

    board[movePosition] = switchPlayersCharacters(player);

    player += 1;
    state = isStillOnPlay(board);
    //await wait(2000);
  }

  console.log(playerWonOrDraw(state, player));
  console.log(drawBoard(board));
}
// function wait(timeout) {
//     return new Promise(resolve => {
//         setTimeout(resolve, timeout);
//     });
// }

function playerWonOrDraw(state, player) {
  return state === 1
    ? `Player ${switchPlayersCharacters(player - 1)} win`
    : "Game draw";
}

// Added x-1 because it should not exceed out of the 9th position
function randomPosition(board) {
  let x = Math.round(Math.random() * board.length);

  while (typeof board[x - 1] === "string") {
    x = Math.round(Math.random() * board.length);
  }

  return x - 1;
}
function switchPlayersTurns(player) {
  if (player % 2 == 1) player = 1;
  else player = 2;

  return player;
}

function switchPlayersCharacters(player) {
  return player === 1 ? "X" : "O";
}
function drawBoard(board) {
  const newBoard = board.map((x) => prettyPrint(x));
  return `        |  ${newBoard[0]}  |  ${newBoard[1]}  |  ${newBoard[2]} \n
        ----------- \n
        |  ${newBoard[3]}  |  ${newBoard[4]}  |  ${newBoard[5]} \n
        ----------- \n
        |  ${newBoard[6]}  | ${newBoard[7]}   | ${newBoard[8]} \n
    `;
}
function prettyPrint(cell) {
  if (typeof cell === "number") {
    return "";
  } else {
    return cell;
  }
}

function isStillOnPlay(board) {
  if (
    isColumnFinished(board) ||
    isRowFinished(board) ||
    isDiagonalFinished(board)
  )
    return 1;
  if (isComplete(board)) return 0;

  return -1;
}

function isComplete(board) {
  let isComplete = true;
  for (let i = 0; i < board.length; i++) {
    if (typeof board[i] === "number") {
      isComplete = false;
    }
  }

  return isComplete;
}

function isRowFinished(board) {
  return (board[0] == board[1] && board[1] == board[2]) ||
    (board[3] == board[4] && board[4] == board[5]) ||
    (board[6] == board[7] && board[7] == board[8])
    ? true
    : false;
}

function isColumnFinished(board) {
  return (board[0] == board[3] && board[3] == board[6]) ||
    (board[1] == board[4] && board[4] == board[7]) ||
    (board[2] == board[5] && board[5] == board[8])
    ? true
    : false;
}
function isDiagonalFinished(board) {
  return (board[0] == board[4] && board[4] == board[8]) ||
    (board[2] == board[4] && board[4] == board[6])
    ? true
    : false;
}
Game(board);
module.exports = {
  Game,
  drawBoard,
  player,
  switchPlayersTurns,
  switchPlayersCharacters,
  randomPosition,
  isRowFinished,
  isColumnFinished,
  isDiagonalFinished,
  isStillOnPlay,
};
