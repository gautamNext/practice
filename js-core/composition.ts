const sum2 = (x) => x + 2;
const triple = (x) => x * 3;
const increament = (x) => ++x;

const composeTwo = (func1, func2) => {
  return function (x) {
    return func1(func2(x));
  };
};

const f = composeTwo(composeTwo(sum2, triple), increament);
const f2 = composeTwo(sum2, composeTwo(triple, increament));

console.log(f(4));
console.log(f2(4));
