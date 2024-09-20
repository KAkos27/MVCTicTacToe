import Model from "../model/Model.js";
import GameBoard from "../view/GameBoard.js";

class Controller {
  #gameBoard;
  #MODEL;
  constructor() {
    this.#MODEL = new Model();
    this.#gameBoard = $(".game-board");
    new GameBoard(this.#gameBoard, 9, this.#MODEL.getGameState());
    this.onSelect();
  }

  onSelect = () => {
    $(window).on("custom-select", (event) => {
      this.#MODEL.setGameState(event.detail);

      let rounCount = this.#MODEL.getRoundCount();
      rounCount++;

      this.#MODEL.setRoundCount(rounCount);

      new GameBoard(this.#gameBoard, 9, this.#MODEL.getGameState());
    });
  };
}

export default Controller;
