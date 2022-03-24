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

module.exports = {
  trackAsyncTasksTime,
  swap,
};
