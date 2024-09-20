import Square from "./Square.js";

class GameBoard {
  #parent;
  #size;
  #gameState;
  constructor(parent, size, gameState) {
    this.#parent = parent;
    this.#size = size;
    this.#gameState = gameState;
    this.displayGameBoard();
  }

  displayGameBoard = () => {
    this.#parent.empty();
    for (let index = 0; index < this.#size; index++) {
      new Square(this.#parent, index, this.#gameState[index]);
    }
  };
}

export default GameBoard;
