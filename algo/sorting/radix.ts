function DataNode(data, next) {
  this.data = data;
  this.next = next;
}

function radixSort(arrInput) {
  let arr = arrInput;
  let tempArray = Array(10);
  const max = arr.reduce((acc, ele) => Math.max(acc, ele));
  const numberOfDigits = `${max}`.length;

  for (let i = 0; i < numberOfDigits; i++) {
    arr.forEach((ele) => {
      const relevantDigit = Math.ceil(ele / Math.pow(10, i)) % 10;
      if (tempArray[relevantDigit]) {
        let node = tempArray[relevantDigit];
        while (node && node.next) {
          node = node.next;
        }
        node.next = new DataNode(ele, null);
      } else {
        tempArray[relevantDigit] = new DataNode(ele, null);
      }
    });

    arr = [];

    tempArray.forEach((ele) => {
      if (ele) {
        let node = ele;
        while (node) {
          arr.push(node.data);
          node = node.next;
        }
      }
    });

    tempArray = Array(10);
  }

  return arr;
}

console.log(radixSort([234, 43543, 435, 345, 34, 45345, 345345, 23]));
