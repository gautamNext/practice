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

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for (let j = i; j < arr.length; j++) { 
      if (arr[k] > arr[j]) {
        k = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
  }

  return arr; 
};

let arr = [8, 4, 5, 3, 9, 0];
console.log("============Before Sorting=============");
console.log(arr);

trackAsyncTasksTime();
arr = selectionSort(arr);
console.log("============After Sorting=============");
console.log(arr);
