function test() {
  return function (...args) {
    console.log(args);
  };
}

test()(3, 4);

// console.log(result.total);

const calc = {
  total: 0,
  add: (num) => {
    calc.total += num;
    return calc;
  },
  multiply: (num) => {
    calc.total *= num;
    return calc;
  },
  substract: (num) => {
    calc.total -= num;
    return calc;
  },
};

const aresult = calc.add(10).multiply(5).substract(30).add(10);
// console.log(aresult.total);

function sum(...args) {
  return args.reduce((acc, ele) => acc + ele, 0);
}

const total = sum(2, 3, 32, 43, 534, 5, 435, 34, 345, 34, 5, 345);
// console.log("total", total);

function func() {
  console.log(Array.isArray(arguments));
}

func();
