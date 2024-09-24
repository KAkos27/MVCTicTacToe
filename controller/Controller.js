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
      this.#MODEL.setGameState(event.detail.row, event.detail.col);

      let rounCount = this.#MODEL.getRoundCount();
      rounCount++;
      this.#MODEL.setRoundCount(rounCount);

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
