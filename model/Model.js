import { WINNING_COMBINATIONS } from "./winningCombinations.js";

class Model {
  #gameState;
  #roundCount;

  constructor() {
    this.#roundCount = 0;
    this.#gameState = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }

  getGameState = () => this.#gameState;

  setGameState = (row, col) => {
    if (!this.#gameState[row][col]) {
      this.#gameState[row][col] = this.#roundCount % 2 == 0 ? "X" : "O";
    }
  };

  getRoundCount = () => this.#roundCount;

  setRoundCount = (rounCount) => {
    this.#roundCount = rounCount;
  };

  checkForWinner = () => {
    let winner;

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
        winner = firstSquareSymbol;

        setTimeout(() => {
          alert(`${winner} nyert!`);
        }, 1);

        location.reload();
      }
    }

    const hasDraw = this.#roundCount === 9 && !winner;
    if (hasDraw) {
      setTimeout(() => {
        alert("Döntetlten");
      }, 1);

      location.reload();
    }
  };
}

export default Model;
