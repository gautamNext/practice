const { makeLinkedList } = require("./make-linked-list");

const firstNode = makeLinkedList(0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function getNodeCount(firstNode) {
  let count = 0;

  function getCount(node) {
    count = count + 1;
    if (node.next) {
      return getCount(node.next);
    } else {
      return count;
    }
  }

  return getCount(firstNode);
}

console.log(getNodeCount(firstNode));
