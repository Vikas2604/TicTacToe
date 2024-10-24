# Tic-Tac-Toe Game

A simple, interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript. The game allows two players to take turns placing their marks ("X" and "O") on a 3x3 grid, and the first player to align three of their marks in a row (horizontally, vertically, or diagonally) wins.

## Table of Contents

- [Game Features](#game-features)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Game Features

- Two-player game: Player "X" and Player "O" take turns.
- Win condition detection: The game automatically checks for winning combinations and announces the winner.
- Draw detection: If all cells are filled and no player has won, the game announces a draw.
- Restart functionality: Players can restart the game after a win or draw.

## How to Play

1. Open the game in your web browser (instructions for setup below).
2. Player "X" always starts the game.
3. Click on any empty cell to place your mark.
4. The game will alternate between Player "X" and Player "O" on each turn.
5. The game will announce a winner if one player aligns three marks in a row, column, or diagonal. If all cells are filled without a winner, the game ends in a draw.
6. Click the **Restart Game** button to reset the board and start a new game.

## Installation

To play the game locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vikas2604/tic-tac-toe.git
2. **Navigate to the project directory**:
   ```bash
   cd tic-tac-toe
3. Open the index.html file in your browser: You can simply double-click the index.html file, or use a live server extension in your code editor.

## Project Structure
  ```bash
tic-tac-toe/
│
├── index.html      # The main HTML file that renders the game
├── style.css       # The CSS file for styling the game board and layout
└── script.js       # The JavaScript file containing the game logic
```
## Technologies Used
1. HTML5: For the structure of the web page and game layout.
2. CSS3: For styling the game board and making it responsive.
3. JavaScript (ES6): For implementing the game logic, including turn-taking, win/draw detection, and restarting functionality.

