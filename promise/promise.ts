function MyPromise(callBack) {
  let _value;
  let _err;
  let __resolveCalled = false;
  let __rejectCalled = false;

  Object.defineProperties(this, {
    value: {
      get() {
        return _value;
      },
      set(nextVal) {
        _value = nextVal;
      },
    },
    error: {
      get() {
        return _err;
      },
    },
  });

  function resolve(val) {
    if (!__resolveCalled) {
      __resolveCalled = true;
      _value = val;
    }
  }

  function reject(err) {
    if (!__rejectCalled) {
      __rejectCalled = true;
      _err = err;
    }
  }

  callBack(resolve, reject);
}

MyPromise.prototype.then = function (callBack) { 
  if (this.value) {
    const next = callBack(this.value);
    if (next instanceof MyPromise) {
      // next.then((val) => {
      //   this.value = val;
      // });
    } else {
      this.value = next;
    }
  }
  return this;
};

MyPromise.prototype.catch = function (callBack) {
  if (this.error) {
    this.value = callBack(this.error);
  }

  return this;
};

const promise = new MyPromise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Resolved");
    resolve("Resolved");
  } else {
    reject("Rejected");
  }
});

const getDate = function () {
  return new MyPromise((resol) => {
    setTimeout(() => {
      resol("Async formatted data : yo!");
    }, 1000);
  });
};

promise
  .then((val) => {
    console.log("value :-", val);
    return getDate();
  })
  .then((nextVal) => {
    console.log(nextVal);
  })
  .catch((err) => {
    console.log("error :- ", err);
  });

// function asyncAdd(a, b, cb) {
//   setTimeout(function () {
//     cb(a + b);
//   }, 4000);
// }

// function Thunk(callBack) {
//   asyncAdd(2, 4, callBack);
// }

// Thunk(function (sum) {
//   console.log(sum);
// });
