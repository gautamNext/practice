const { makeLinkedList, getNodeAtPosition } = require("./make-linked-list");
const { traverseLinkedList } = require("./traverse");

const firstNode = makeLinkedList(0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function deleteNodeAtPosition(pointer, position) {
  const beforeNode = getNodeAtPosition(pointer, position - 1);
  if (beforeNode.next) {
    beforeNode.next = beforeNode.next.next;
  }
}

console.log("=======Before======");
traverseLinkedList();

deleteNodeAtPosition(firstNode, 5);

console.log("=======After======");
traverseLinkedList();
