import Square from "./Square.js";

class GameBoard {
  #parent;
  #size;
  #gameState;
  constructor(parent, gameState) {
    this.#parent = parent;
    this.#size = 3;
    this.#gameState = gameState;
    this.displayGameBoard();
  }

  displayGameBoard = () => {
    this.#parent.empty();
    for (let row = 0; row < this.#size; row++) {
      for (let col = 0; col < this.#size; col++) {
        new Square(this.#parent, row, col, this.#gameState[row][col]);
      }
    }
  };
}

export default GameBoard;
