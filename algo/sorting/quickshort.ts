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

const getPartition = (arr, firstIndex, lastIndex) => {
  let partition = firstIndex;
  if (firstIndex !== lastIndex && lastIndex - firstIndex !== 1) {
    /**
     *    [1,3,4,5,6,7,8,9,9,10]
     */
    const pivot = arr[Math.ceil(firstIndex + (lastIndex - firstIndex) / 2)];
    let i = firstIndex,
      j = lastIndex;

    while (i < j) {
      while (arr[i] <= pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i < j) {
        swap(arr, i, j);
        i++, j--;
      }
    }
  }
  return partition;
};

/**
 * Quick short uses partitioning procedure
 *
 */
const quickShort = (arr, firstIndex, lastIndex) => {
  if (lastIndex > firstIndex) {
    const partition = getPartition(arr, firstIndex, lastIndex);
    quickShort(arr, firstIndex, partition);
    quickShort(arr, partition + 1, lastIndex);
  }

  return arr;
};

let arr = [8, 4, 5, 3, 9, 0];
console.log("============Before Sorting=============");
console.log(arr);

trackAsyncTasksTime();
arr = quickShort(arr, 0, arr.length - 1);
console.log("============After Sorting=============");
console.log(arr);
