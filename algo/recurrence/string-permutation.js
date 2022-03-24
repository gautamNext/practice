function permute(str, l, r) {
  if (l == r) {
    console.log(str);
  } else {
    for (let i = l; i <= r; i++) {
      console.log(`l=${l}  i=${i}  r=${r}`);
      console.log("swap1(str, l, i)", `(${str}, ${l}, ${i})`);
      console.log("permute(str, l + 1, r)", `(${str}, ${l + 1}, ${r})`);
      console.log("swap2(str, l, i)", `(${str}, ${l}, ${i})`);
      

      str = swap(str, l, i);
      permute(str, l + 1, r);
      str = swap(str, l, i);
    }
  }
}

function swap(a, i, j) {
  let temp;
  let charArray = a.split("");
  temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

let str = "ABC";
let n = str.length;
permute(str, 0, n - 1);
