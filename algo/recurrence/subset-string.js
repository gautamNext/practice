function powerSet(str, i, curr) {
  if (i === str.length) {
    console.log(curr);
    return;
  }

  powerSet(str, i + 1, curr + str[i]);
  powerSet(str, i + 1, curr);
}

powerSet("asd", 0, "");
