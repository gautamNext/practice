const operation = {
  11: {
    value: "0",
    remainder: "1",
  },
  "00": {
    value: "0",
  },
  "01": {
    value: "1",
  },
  10: {
    value: "1",
  },
  1: {
    value: "1",
  },
  0: {
    value: "0",
  },
};

var addBinary = function (a, b) {
  let remainderPast = "";
  let iA = a.length - 1;
  let jB = b.length - 1;
  let sum = "";
  while (iA >= 0 || jB >= 0) {
    const key = `${a[iA] ?? ""}${b[jB] ?? ""}`;
    console.log(key);
    let { value, remainder } = operation[key];
    if (remainderPast && !value) {
      value = remainderPast[0];
      remainderPast = remainderPast.slice(1);
    }
    sum = `${value}${sum}`;
    remainderPast = remainderPast + (remainder ?? "");

    iA--;
    jB--;
  }

  return `${remainderPast}${sum}`;
};

const res = addBinary("1010", "1011");

console.log(res);
