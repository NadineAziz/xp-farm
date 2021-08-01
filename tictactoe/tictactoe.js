let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let player = 1;
let movePosition;
let state = -1;

async function Game(board) {
  console.log(`Game Board Creation:`);

  while (state === -1) {
    console.log(drawBoard(board));

    player = switchPlayersTurns(player);

    console.log(`${switchPlayersCharacters(player)}'s Turn`);

    movePosition = randomPosition(board);

    board[movePosition] = switchPlayersCharacters(player);

    player += 1;
    state = isStillOnPlay(board);
    await wait(2000);
  }
  console.log(drawBoard(board));
  console.log(playerWonOrDraw(state, player));
}
function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function playerWonOrDraw(state, player) {
  return state === 1
    ? `Player ${switchPlayersCharacters(player - 1)} win`
    : "Game draw";
}

function randomPosition(board) {
  let x = Math.floor(Math.random() * board.length);

  while (typeof board[x] === "string") {
    x = Math.floor(Math.random() * board.length);
  }

  return x;
}
function switchPlayersTurns(player) {
  return player % 2 === 1 ? 1 : 2;
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
  return typeof cell === "number" ? "" : cell;
}

function isStillOnPlay(board) {
  return isColumnFinished(board) ||
    isRowFinished(board) ||
    isDiagonalFinished(board)
    ? 1
    : isComplete(board)
    ? 0
    : -1;
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
