Array.prototype.customReducer = function (callback, acc) {
  let nextArray = this;
  let result = acc;

  if (!acc) {
    result = nextArray[0];
    nextArray = this.slice(1);
  }

  nextArray.forEach((ele) => {
    result = callback(result, ele);
  });

  return result;
};

const result = [1,2,3,4,5].customReducer((acc, ele) => acc + ele);

console.log(result);
