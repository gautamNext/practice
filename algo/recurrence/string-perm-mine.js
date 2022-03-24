function permutation(str, startIndex, endIndex) {
  if (startIndex === endIndex) {
    console.log(str);
  }

  for (let i = startIndex; i <= endIndex; i++) {
    str = swap(str, i, startIndex);
    permutation(str, startIndex + 1, endIndex);
    str = swap(str, i, startIndex);
  }
}

function swap(str, from, to) {
  const strArray = str.split("");
  const temp = strArray[from];
  strArray[from] = strArray[to];
  strArray[to] = temp;

  return strArray.join("");
}

permutation("ABC", 0, 2);
