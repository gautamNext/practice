function permutation(str, l, r) {
  if (l === r) {
    console.log(str);
  } else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permutation(str, l + 1, r);
      str = swap(str, l, i);
    }
  }
}

function swap(str, i, j) {
  const strArray = str.split("");
  const temp = strArray[i];
  strArray[i] = strArray[j];
  strArray[j] = temp;

  return strArray.join("");
}

permutation('ABC', 0, 2)