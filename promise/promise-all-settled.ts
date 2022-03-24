Promise.customAllSettled = function (promiseList) {
  let resultList = [];
  return new Promise((resolve) => {
    promiseList.forEach(async (promise, index) => {
      try {
        const result = await promise;
        resultList[index] = {
          status: "fulfilled",
          value: result,
        };
      } catch (error) {
        resultList[index] = {
          status: "rejected",
          reason: error.message,
        };
      }

      if (resultList.filter((ele) => ele).length === promiseList.length) {
        resolve(resultList);
      }
    });
  });
};

Promise.customAllSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));

// [
//   {status: "fulfilled", value: 33},
//   {status: "fulfilled", value: 66},
//   {status: "fulfilled", value: 99},
//   {status: "rejected",  reason: Error: an error}
// ]
