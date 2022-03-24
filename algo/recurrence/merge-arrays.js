const arr1 = [2, 4, 6, 8, 9, 12];
const arr2 = [5, 6, 6, 14, 19, 120, 1534, 1667];

function mergeArrays(a, b) {
  let nextArr = [];
  const longArray = a.length >= b.length ? a : b;
  const shortArray = a.length >= b.length ? b : a;
  let longArrayIndex = 0,
    shortArrayIndex = 0,
    nextArrayIndex = 0;

  while (
    longArrayIndex < longArray.length &&
    shortArrayIndex < shortArray.length
  ) {
    if (longArray[longArrayIndex] <= shortArray[shortArrayIndex]) {
      nextArr[nextArrayIndex] = longArray[longArrayIndex];
      nextArrayIndex++;
      longArrayIndex++;
    } else {
      nextArr[nextArrayIndex] = shortArray[shortArrayIndex];
      nextArrayIndex++;
      shortArrayIndex++;
    }
  }

  nextArr = [
    ...nextArr,
    ...shortArray.slice(shortArrayIndex),
    ...longArray.slice(longArrayIndex),
  ];

  return nextArr;
}

console.log(mergeArrays(arr1, arr2));
