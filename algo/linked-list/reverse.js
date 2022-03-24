const { makeLinkedList } = require("./make-linked-list");
const { traverseLinkedList } = require("./traverse");

const firstNode = makeLinkedList(0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function reverseLinkedList(node) {
  if (node === null || node.next === null) {
    return node;
  }

  const nextHead = reverseLinkedList(node.next);
  node.next.next = node;
  node.next = null;

  return nextHead;
}

console.log("=======Before======");
traverseLinkedList(firstNode);

const n = reverseLinkedList(firstNode);

console.log("=======After======");
traverseLinkedList(n);
