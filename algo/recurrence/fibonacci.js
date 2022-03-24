// 0 1 1 2 3 5 8 ...

const cache = {};

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  if (cache[n]) {
    return cache[n];
  } else {
    const next = fibonacci(n - 2) + fibonacci(n - 1);
    cache[n] = next;
  }
  // console.log("-----")
  return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(9999));

function sumOfAllFibonacci(n) {
  if (n === 0) {
    return n;
  }

  return fibonacci(n) + sumOfAllFibonacci(n - 1);
}

console.log(sumOfAllFibonacci(9999));
