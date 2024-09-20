class Square {
  #parent;
  #suare;
  #row;
  #col;
  #icon;

  constructor(parent, row, col, icon) {
    this.#parent = parent;
    this.#row = row;
    this.#col = col;
    this.#icon = icon;
    this.displaySquare();
    this.#suare = $(".custom-select:last");
    this.eventListener();
  }

  displaySquare = () => {
    const html = `<button class='square custom-select'>${this.#icon}</button>`;
    this.#parent.append(html);
  };

  eventListener = () => {
    this.#suare.on("click", () => {
      const e = new CustomEvent("custom-select", {
        detail: { row: this.#row, col: this.#col },
      });

      window.dispatchEvent(e);
    });
  };
}

export default Square;
