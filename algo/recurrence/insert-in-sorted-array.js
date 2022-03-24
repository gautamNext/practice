const arr = [2, 4, 5, 6, 7, 8, 9, 12, 13, 15, 23, 25, 56, 67, 78, 102, 566];

function insertInSorted(ele) {
  arr.length = arr.length + 1;
  let i = 0;
  while (arr[i] < ele) {
    i++;
  }

  do {
    const temp = arr[i];
    arr[i] = ele;
    ele = temp;
    i++;
  } while (i < arr.length);
}

insertInSorted(20);

console.log(arr);
