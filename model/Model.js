class Model {
  #gameState;
  #roundCount;
  constructor() {
    this.#roundCount = 0;
    this.#gameState = ["", "", "", "", "", "", "", "", ""];
  }

  getGameState = () => this.#gameState;

  setGameState = (index) => {
    if (!this.#gameState[index]) {
      this.#gameState[index] = this.#roundCount % 2 == 0 ? "X" : "O";
    }
  };

  setRoundCount = (rounCount) => {
    this.#roundCount = rounCount;
  };

  getRoundCount = () => this.#roundCount;
}

export default Model;
