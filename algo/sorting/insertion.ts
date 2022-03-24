const trackAsyncTasksTime = () => {
  const startTime = new Date();
  setTimeout(() => {
    const endTime = new Date();
    const timeDiff = endTime.getTime() - startTime.getTime();

    console.log("Time diff in milliseconds :-  ", timeDiff);
  }, 0);
};

const swap = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
        arr[j] = temp;
      } else {
        break;
      }
    }
  }

  return arr;
};

let arr = [8, 4, 328, 43, 23, -234, 324, 23, 4, 5, 3, 9, 0];
console.log("============Before Sorting=============");
console.log(arr);

trackAsyncTasksTime();
arr = insertionSort(arr);
console.log("============After Sorting=============");
console.log(arr);
