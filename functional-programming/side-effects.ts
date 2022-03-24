function wrapper() {
  function foo(x, y) {
    y++;
    return x * y;
  }

  return foo;
}
const foo = wrapper();
const z = foo(20, 5);
console.log(z); // 120

const z3 = foo(20, 5);
console.log(z3); // 120

const z2 = foo(25, 5);
console.log(z2); // 120
