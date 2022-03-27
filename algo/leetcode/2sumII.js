// [-99,3,4, 5,108] target => 9

function binarySearch(arr, startIndex, endIndex, elementNeeded) {
  if (startIndex === endIndex) {
    if (arr[startIndex] === elementNeeded) {
      return startIndex;
    } else {
      return;
    }
  }

  const midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  if (arr[midIndex] === elementNeeded) {
    return midIndex;
  } else if (arr[midIndex] < elementNeeded) {
    return binarySearch(arr, midIndex + 1, endIndex, elementNeeded);
  } else {
    return binarySearch(arr, startIndex, midIndex, elementNeeded);
  }
}

var twoSum = function (numbers, target) {
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    const elementNeeded = target - element;
    const neededIndex = binarySearch(
      numbers,
      index + 1,
      numbers.length - 1,
      elementNeeded
    );
    if (neededIndex) {
      return [index + 1, neededIndex + 1];
    }
  }
};

var twoSum2 = function (numbers, target) {
  let startPointer = 0,
    endPointer = numbers.length - 1;
  while (numbers[startPointer] + numbers[endPointer] !== target) {
    if (numbers[startPointer] + numbers[endPointer] > target) {
      endPointer--;
    } else if (numbers[startPointer] + numbers[endPointer] < target) {
      startPointer++;
    }
  }

  return [startPointer + 1, endPointer + 1];
};

// [1, -1, 2, 7, 11, 15] // 9
var twoSum3 = function (numbers, target) {
  const numberToIndexMapping = {};
  for (let index = 0; index < numbers.length; index++) {
    const lookOutElement = target - numbers[index];

    if (numberToIndexMapping[lookOutElement] !== undefined) {
      return [numberToIndexMapping[lookOutElement], index];
    }

    numberToIndexMapping[numbers[index]] = index;
  }
};

console.log(twoSum3([1, -1, 2, 7, 11, 15], 9));
