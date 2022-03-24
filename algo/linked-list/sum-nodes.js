const { makeLinkedList } = require("./make-linked-list");

const firstNode = makeLinkedList(0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function getNodeSum(firstNode) {
  let sum = 0;

  function getSum(node) {
    sum = sum + node.data;
    if (node.next) {
      return getSum(node.next);
    } else {
      return sum;
    }
  }

  return getSum(firstNode);
}

console.log(getNodeSum(firstNode));
