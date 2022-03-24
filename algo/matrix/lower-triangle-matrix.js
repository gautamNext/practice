function LowerTriangleMatrix(arr) {
  this.arr = arr;
}

LowerTriangleMatrix.prototype.printMatrix = function () {
  for (let i = 0; i < 5; i++) {
    let matrix = "";
    for (let j = 0; j < 5; j++) {
      if (i < j) {
        matrix = `${matrix} 0`;
      } else {
        const ele = ((i + 1) * (i + 1 - 1)) / 2 + j;
        matrix = `${matrix} ${this.arr[ele]}`;
      }
    }
    console.log(matrix);
  }
};

const mat = new LowerTriangleMatrix([
  2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 1, 2, 3, 4, 5,
]);

mat.printMatrix();
