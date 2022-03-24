const swap = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
};

const permutate = (arr, startIndex, endIndex) => {
  if (startIndex === endIndex) {
    console.log(arr.join(""));
  } else {
    for (let index = startIndex; index <= endIndex; index++) {
      swap(arr, startIndex, index);
      permutate(arr, startIndex + 1, endIndex);
      swap(arr, startIndex, index);
    }
  }
};

const stringArray = "ABCD".split("");
permutate(stringArray, 0, stringArray.length);
