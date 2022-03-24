function DiagonalMatrix() {
  this.arr = [];
}

DiagonalMatrix.prototype.setElements = (arr) => {
  this.arr = arr;
};

DiagonalMatrix.prototype.printMatrix = () => {
  let matrix = ``;
  for (let i = 0; i < this.arr.length; i++) {
    matrix = "";
    for (let j = 0; j < this.arr.length; j++) {
      if (i === j) {
        matrix = `${matrix} ${this.arr[i]}`;
      } else {
        matrix = `${matrix} 0`;
      }
    }

    console.log(`${matrix}`);
  }
};

const s = new DiagonalMatrix();
s.setElements([3, 4, 5, 2, 6]);
s.printMatrix();
