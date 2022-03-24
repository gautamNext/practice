const trackAsyncTasksTime = () => {
  const startTime = new Date();
  setTimeout(() => {
    const endTime = new Date();
    const timeDiff = endTime.getTime() - startTime.getTime();

    console.log("Time diff in milliseconds:-", timeDiff);
  }, 0);
};

const swap = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const bubbleSortAdaptive = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let isAlreadySorted = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isAlreadySorted = false;
      }
    }
    if (isAlreadySorted) {
      break;
    }
  }
  return arr;
};

let arr = [8, 4, 5, 3, 9, 0];
console.log("============Before Sorting=============");
console.log(arr);

trackAsyncTasksTime();
arr = bubbleSortAdaptive(arr);
console.log("============After Sorting=============");
console.log(arr);
