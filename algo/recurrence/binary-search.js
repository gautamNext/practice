const arr = [2, 4, 5, 6, 7, 8, 9, 12, 13, 15, 23, 25, 56, 67, 78, 102, 566];

function binarySearch(lowerIndex, higherIndex, ele) {
  const midIndex = Math.floor((higherIndex + lowerIndex) / 2);
  console.log("midIndex", midIndex);
  if (arr[midIndex] === ele) {
    return midIndex;
  }
  if (arr[lowerIndex] === ele) {
    return lowerIndex;
  }
  if (arr[higherIndex] === ele) {
    return higherIndex;
  }
  if (lowerIndex >= higherIndex) {
    return "Not found!!!";
  }
  if (arr[midIndex] > ele) {
    return binarySearch(lowerIndex, midIndex - 1, ele);
  }
  if (arr[midIndex] < ele) {
    return binarySearch(midIndex + 1, higherIndex, ele);
  }
}

console.log(binarySearch(0, arr.length - 1, 12));
