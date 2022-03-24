// const sym1 = new Symbol();  // Error Symbol is not a constructor
// const num1 = new Number();  // Works fine.
const key = "123";
const sym = Symbol(key);
const sym2 = Symbol(key);

console.log("typeof sym :- ", typeof sym);
console.log("typeof sym2 :- ", typeof sym2);
console.log("sym === sym2 :- ", sym === sym2); // False even though keys for both are same.
console.log(
  "Symbol.for(key) === Symbol.for(key) :- ",
  Symbol.for(key) === Symbol.for(key)
);

const anObjWithSymbol = {
  [sym]: "Ok I am value of a symbol and I am enumerable",
  thisKeyIsEnumerable: "I am inumerable",
};

(function iterateOverObjectProperties(obj) {
  console.log("IterateOverObjectProperties --- start");
  for (let key in obj) {
    console.log(key);
  }
  console.log("IterateOverObjectProperties --- end");``
})(anObjWithSymbol);

console.log(Object.getOwnPropertySymbols(anObjWithSymbol)); // prints one symbol in array.
