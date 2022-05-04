let players = ['X', 'O'];
let activePlayer;
let board = [];


function startGame() {
  board = [
    [ '', '', '' ], 
    [ '', '', '' ], 
    [ '', '', '' ],
  ];
  activePlayer = 0;
  renderBoard (board);
};

function isWinner(board) {
  // поиск победителя по-горизонтали
 for (let row of board) {
    let winnerRow = [];
    for (let cell of row) {
      if (cell === players[activePlayer]) {
        winnerRow.push(players[activePlayer]);
      };
    };
    if (winnerRow.length === board.length) return true;
  };

  //поиск победителя по-диагонали
  let winnerDiagonalFromLeft = [];
  for (let i = 0; i < board.length; i += 1) {
    if (board[i][i] === players[activePlayer]) {
      winnerDiagonalFromLeft.push(players[activePlayer]);
     };
  };
  if (winnerDiagonalFromLeft.length === board.length) return true;

  let winnerDiagonalFromRight = [];
  for (let i = 0; i < board.length; i += 1) {
    if (board[i][(board.length - 1) - i] === players[activePlayer]) {
      winnerDiagonalFromRight.push(players[activePlayer]);
     };
  };
  if (winnerDiagonalFromRight.length === board.length) return true;

  //поиск победителя по-вертикали
  for (let [j, row] of board.entries()) {
    let winnerColumn = [];
    for (let [i, cell] of row.entries()) {
      if (board[i][j] === players[activePlayer]) {
        winnerColumn.push(players[activePlayer]);
      };
    };
    if (winnerColumn.length === board.length) return true;
  };

  //победителя нет
  return false;
};

function click(row, column) {
  board[row].splice(column, 1, players[activePlayer]);
  renderBoard (board);
  if (isWinner(board) === true) showWinner(activePlayer);
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  };
};