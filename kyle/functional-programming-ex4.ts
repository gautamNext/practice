function outer1(x) {
  return function foo() {
    return x;
  };
}

function add(a, b) {
  return a + b;
}

function add2(fn1, fn2) {
  return add(fn1(), fn2());
}

// function addn(...args) {
//   if (args.length === 2) {
//     return add(args[0](), args[1]());
//   } else if (args.length === 1) {
//     return args[0]();
//   }else if(args.length === 0){
//       return 0
//   }

//   return add(args[0](), args[1]()) + addn(...args.slice(2));
// }

// Using reduce...

function addn(...args) {
  return args.reduce(
    (acc, ele) =>
      function () {
        return add2(acc, ele);
      }
  )();
}

console.log(addn(outer1(10), outer1(20), outer1(10), outer1(20))); // 30
