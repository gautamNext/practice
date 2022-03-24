// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

Promise.customAll = function (promises) {
  let results = [];
  return new Promise((resolve, reject) => {
    promises.forEach(async (promise, index) => {
      try {
        let result = await promise;
        results[index] = result;

        if (results.filter((ele) => ele).length === promises.length) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
};

Promise.customAll([
  Promise.resolve("FirstPromise"),
  new Promise((res, rej) =>
    setTimeout(() => rej("Error in 2nd Promise"), 2000)
  ),
  Promise.resolve("3rd Promise"),
])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });
