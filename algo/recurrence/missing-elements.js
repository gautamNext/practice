const arr = [3, 4, 5, 6, 7, 9, 10, 11, 12, 16];

function findMissingElements(arr) {
  let diff = arr[0] - 0;
  for (let i = 0; i < arr.length; i++) {
    if (diff !== arr[i] - i) {
      let j = 0;
      while (diff + i + j < arr[i]) {
        console.log(diff + i + j);
        j++;
      }
      diff = arr[i] - i;
    }
  }
}

findMissingElements(arr);
