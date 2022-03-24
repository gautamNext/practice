function PromisePolyfill(executor) {
  this.resolve;
  this.reject;

  function resolve(val){
    this.resolve(val)
  }

  function reject(err){
    this.reject(err)
  }

  executor(resolve, reject);
}

PromisePolyfill.prototype.then = function (callBackResolve) {
  this.resolve = callBackResolve;
  return this;
};

PromisePolyfill.prototype.catch = function (callBackReject) {
  this.reject = callBackReject;
  return this;
};

const myPromise = new PromisePolyfill((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));
