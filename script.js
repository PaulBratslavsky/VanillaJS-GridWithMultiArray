const gridMatrix = [
  [1, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 1],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 1, 1],
];

class GridSystem {
  constructor(matrix) {
    this.matrix = matrix;
    this.uiContext = this.#getContext(720, 880, "purple");
    this.outlineContext = this.#getContext(0, 0, "#444");
    this.topContext = this.#getContext(0, 0, "#111", true);
    this.cellSize = 40;
    this.padding = 4;
  }

  #getCenter(width, height) {
    return {
      width: window.innerWidth / 2 - width / 2 + "px",
      height: window.innerHeight / 2 - height / 2 + "px",
    };
  }

  #getContext(height, width, color = "#111", isTransparent = false) {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width = width;
    this.height = this.canvas.height = height;
    this.canvas.style.position = "absolute";
    this.canvas.style.backgroundColor = color;

    if (isTransparent) this.canvas.style.backgroundColor = "transparent";

    this.canvas.style.marginLeft = this.#getCenter(width, height).width;
    this.canvas.style.marginTop = this.#getCenter(width, height).height;

    document.body.appendChild(this.canvas);

    return this.context;
  }

  render() {
    const width =
      (this.cellSize + this.padding) * this.matrix[0].length - this.padding;
    const height =
      (this.cellSize + this.padding) * this.matrix.length - this.padding;

    this.outlineContext.canvas.width = width;
    this.outlineContext.canvas.height = height;

    this.outlineContext.canvas.style.marginLeft = this.#getCenter(
      width,
      height
    ).width;
    this.outlineContext.canvas.style.marginTop = this.#getCenter(
      width,
      height
    ).height;

    this.topContext.canvas.style.marginLeft = this.#getCenter(
      width,
      height
    ).width;
    this.topContext.canvas.style.marginTop = this.#getCenter(
      width,
      height
    ).height;

    for (let row = 0; row < this.matrix.length; row++) {
      for (let column = 0; column < this.matrix[row].length; column++) {
        this.outlineContext.fillStyle =
          this.matrix[row][column] > 0 ? "orange" : "blue";
        this.outlineContext.fillRect(
          column * (this.cellSize + this.padding),
          row * (this.cellSize + this.padding),
          this.cellSize,
          this.cellSize
        );
      }
    }

    this.uiContext.font = "20px Courier";
    this.uiContext.fillStyle = "white";
    this.uiContext.fillText("Grid Based System", 20, 30)
  }
}

const gridSystem = new GridSystem(gridMatrix);
gridSystem.render();
console.log(gridSystem);
console.log(this);
