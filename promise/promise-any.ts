Promise.customAny = function (promiseList) {
  let errorList = [];
  return new Promise((resolve, reject) => {
    promiseList.forEach(async (promise, index) => {
      try {
        const result = await promise;
        resolve(result);
      } catch (error) {
        errorList[index] = {
          status: "rejected",
          reason: error.message,
        };
      }

      if (errorList.filter((ele) => ele).length === promiseList.length) {
        reject(errorList);
      }
    });
  });
};

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.customAny(promises).then((value) => console.log(value));
