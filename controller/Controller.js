import Model from "../model/Model.js";
import GameBoard from "../view/GameBoard.js";

class Controller {
  #gameBoard;
  #MODEL;

  constructor() {
    this.#MODEL = new Model();
    this.#gameBoard = $(".game-board");
    new GameBoard(this.#gameBoard, this.#MODEL.getGameState());
    this.onSelect();
  }

  handleGameEnd = (winner) => {
    const message = winner ? `${winner} nyert!` : "Döntetlen!";
    setTimeout(() => {
      alert(message);
    }, 1);
    location.reload();
  };

  onSelect = () => {
    $(window).on("custom-select", (event) => {
      const gameState = this.#MODEL.getGameState();
      const row = event.detail.row;
      const col = event.detail.col;

      if (!gameState[row][col]) {
        this.#MODEL.setGameState(row, col);
        this.#MODEL.setRoundCount();
      }

      new GameBoard(this.#gameBoard, this.#MODEL.getGameState());

      this.#MODEL.checkForWinner();
      const winner = this.#MODEL.getWinner();
      const hasDraw = this.#MODEL.getHasDraw();

      if (winner) {
        this.handleGameEnd(winner);
      }

      if (hasDraw) {
        this.handleGameEnd(winner);
      }
    });
  };
}

export default Controller;
