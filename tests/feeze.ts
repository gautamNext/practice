const a = {
  a: 20,
  b: {
    c: 30,
  },
};

Object.freeze(a);

console.log(a);

a.a = 90;
a.b.c = 90;
a.b = 90

console.log(a);

const arr = [undefined];
arr.length = 80;

const tt = arr.forEach(ele => {
    console.log('--')
    return ele
});
console.log(tt);