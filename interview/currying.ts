function add(...args) {
  return args.reduce((acc, ele) => acc + ele);
}

function mul(...args) {
  return args.reduce((acc, ele) => acc * ele);
}

const processData = (operation) => {
  let result;
  return function namedFunc(...args) {
    if (args.length === 0) {
      return result;
    }
    if (result !== undefined) {
      result = operation(...args, result);
    } else {
      result = operation(...args);
    }

    return namedFunc;
  };
};

console.log(processData(add)(1, 2, 3)());
console.log(processData(add)(1)(2)(2)()); // 5
console.log(processData(add)(2)(4, 3)()); // 9

console.log(processData(mul)(1)(1)(1)(1)(1)(1)()); // 1
console.log(processData(mul)(1)(1)(1)(1)(2, 1)()); // 2
console.log(processData(mul)(1, 1)(1)(1)(2, 1)()); // 2
console.log(processData(mul)(1, 1, 10)(1)(2, 1)()); // 20
console.log(processData(mul)(1, 1, 10, 0)(2, 1)());
