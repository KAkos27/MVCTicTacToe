class Square {
  #parent;
  #suare;
  #index;
  #icon;

  constructor(parent, index, icon) {
    this.#parent = parent;
    this.#index = index;
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
      const e = new CustomEvent("custom-select", { detail: this.#index });

      window.dispatchEvent(e);
    });
  };
}

export default Square;
