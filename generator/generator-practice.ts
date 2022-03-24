function* generator(z) {
  console.log("first");
  const x = 1 + (yield z);
  const y = 2 + x + (yield x);
  console.log(y);

  return y;
}

// const iter = generator(9);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

function foo(x) {
  console.log("x: " + x);
}

function* bar() {
  const x = 45;
  const y = yield 9 + x;
  yield 5 + y; // just pause
  foo(yield 6); // pause waiting for a parameter to pass into `foo(..)`
}

const baritr = bar();
console.log(baritr.next());
console.log(baritr.next(54));
console.log(baritr.next());
console.log("===================================");

function* foo2(x) {
  var y = 2 * (yield x + 1);
  var z = yield y / 3;
  return x + y + z;
}

var it = foo2(5);

// note: not sending anything into `next()` here
console.log(it.next()); // { value:6, done:false }
console.log(it.next(12)); // { value:8, done:false }
console.log(it.next(13)); // { value:42, done:true }
