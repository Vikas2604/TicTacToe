
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartButton = document.getElementById('restart');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellClick(event) {
  const clickedCell = event.target;
  const cellIndex = clickedCell.getAttribute('data-index');

  if (gameBoard[cellIndex] !== '' || !gameActive) {
    return;
  }

  updateCell(clickedCell, cellIndex);
  checkWinner();
}

function updateCell(cell, index) {
  gameBoard[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const winCondition = winningConditions[i];
    let a = gameBoard[winCondition[0]];
    let b = gameBoard[winCondition[1]];
    let c = gameBoard[winCondition[2]];

    if (a === '' || b === '' || c === '') {
      continue;
    }

    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (!gameBoard.includes('')) {
    statusText.textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  switchPlayer();
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function restartGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  statusText.textContent = `Player ${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = '');
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);

statusText.textContent = `Player ${currentPlayer}'s turn`;