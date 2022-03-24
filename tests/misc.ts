var x = [15, -4, -10, -12, -12, 10, -11, 23, 83, 7, -2];

function indefOfNextNegativeNumber(arr, startIndex) {
  for (let index = startIndex; index < arr.length; index++) {
    if (arr[index] < 0) {
      return index;
    }
  }

  return arr.length + 1; // To break
}

function indefOfNextPositiveNumber(arr, startIndex) {
  for (let index = startIndex; index < arr.length; index++) {
    if (arr[index] > 0) {
      return index;
    }
  }

  return arr.length + 1; // To break
}

function orderedArray(arr) {
  let elementIndexToBeSwaped = 0; // indexOf first +ve
  let elementIndexToBeSwapedNegative = indefOfNextNegativeNumber(
    arr,
    elementIndexToBeSwaped
  );

  while (elementIndexToBeSwapedNegative < arr.length) {
    const temp = arr[elementIndexToBeSwaped];
    arr[elementIndexToBeSwaped] = arr[elementIndexToBeSwapedNegative];
    arr[elementIndexToBeSwapedNegative] = temp;

    elementIndexToBeSwaped = indefOfNextPositiveNumber(
      arr,
      elementIndexToBeSwaped
    );
    elementIndexToBeSwapedNegative = indefOfNextNegativeNumber(
      arr,
      elementIndexToBeSwaped
    );
  }

  return arr;
}

const orderedArr = orderedArray(x);
console.log(orderedArr);
