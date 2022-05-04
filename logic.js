let players = ['X', 'O'];
let activePlayer = 0;
let board = [];


function startGame() {
  board = [
    [ '', '', '' ], 
    [ '', '', '' ], 
    [ '', '', '' ],
  ];
  renderBoard (board);
}

function isWinner(board) {
  // поиск победителя по-горизонтали
  for (let row = 0; row < board.length; row += 1) {
    let winnerRow = [];
    for (let column = 0; column < board.length; column += 1) {
      if (board[row][column] === players[activePlayer]) {
        winnerRow.push(players[activePlayer]);
      }
    }
    if (winnerRow.length === board.length) return true;
  }

  //поиск победителя по-диагонали
  let winnerDiagonalFromLeft = [];
  for (let i = 0; i < board.length; i += 1) {
    if (board[i][i] === players[activePlayer]) {
      winnerDiagonalFromLeft.push(players[activePlayer]);
     }
  }
  if (winnerDiagonalFromLeft.length === board.length) return true;

  let winnerDiagonalFromRight = [];
  for (let i = 0; i < board.length; i += 1) {
    if (board[i][(board.length - 1) - i] === players[activePlayer]) {
      winnerDiagonalFromRight.push(players[activePlayer]);
     }
  }
  if (winnerDiagonalFromRight.length === board.length) return true;

  //поиск победителя по-вертикали
  for (let column = 0; column < board.length; column += 1) {
    let winnerColumn = [];
    for (let row = 0; row < board.length; row += 1) {
      if (board[row][column] === players[activePlayer]) {
        winnerColumn.push(players[activePlayer]);
      }
    }
    if (winnerColumn.length === board.length) return true;
  }

  //победителя нет
  return false;
}


function click(row, column) {
  board[row].splice(column, 1, players[activePlayer]);
  renderBoard (board);
  if (isWinner(board) === true) showWinner(activePlayer);
  if (activePlayer === 0) activePlayer = 1; else activePlayer = 0;
}

function random(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

function isBot(board) {
  let indexes = [];
  for (let [i, row] of board.entries()) {
    for (let [j, cell] of row.entries()) {
      if (cell === '') indexes.push([i, j]);
    }
  }
  
  let [row, column] = indexes[random(0, indexes.length)];
  return [row, column];
}
