import { WINNING_COMBINATIONS } from "./winningCombinations.js";

class Model {
  #gameState;
  #roundCount;
  #winner;
  #hasDraw;

  constructor() {
    this.#roundCount = 0;
    this.#gameState = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.#winner = null;
    this.#hasDraw = false;
  }

  getGameState = () => this.#gameState;

  setGameState = (row, col) => {
    if (!this.#gameState[row][col]) {
      this.#gameState[row][col] = this.#roundCount % 2 == 0 ? "X" : "O";
    }
  };

  setRoundCount = () => {
    this.#roundCount++;
  };

  checkForWinner = () => {
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol =
        this.#gameState[combination[0].row][combination[0].column];
      const secondSquareSymbol =
        this.#gameState[combination[1].row][combination[1].column];
      const thirdSquareSymbol =
        this.#gameState[combination[2].row][combination[2].column];

      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        this.#winner = firstSquareSymbol;
      }
    }

    this.#hasDraw = this.#roundCount === 9 && !this.#winner;
  };

  getWinner = () => this.#winner;

  getHasDraw = () => this.#hasDraw;
}

export default Model;
