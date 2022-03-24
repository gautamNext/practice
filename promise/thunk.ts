function asyncAdd(a, b, cb) {
  setTimeout(function () {
    cb(a + b);
  }, 1000);
}

function Thunk(callBack) {
  asyncAdd(2, 4, callBack);
}

Thunk(function (sum) {
  console.log(sum);
});

// =====
// This code lets u remove hardcoding of asyncAdd in creation  of thunk
function makeThunk(fun, ...args) {
  return function (callback) {
    fun(...args, callback);
  };
}

const thunk = makeThunk(asyncAdd, 10, 20);

thunk(function (result) {
  console.log("Result:- ", result);
});

function makeThunk2(fun, ...args) {
  return function (callBack) {
    fun(...args, callBack);
  };
}




