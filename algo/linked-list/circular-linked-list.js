const { makeLinkedList } = require("./make-linked-list");
const { getNodeAtPosition } = require("./insert-node");

const firstNode = makeLinkedList(0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const nodeAtEnd = getNodeAtPosition(firstNode, 9);

nodeAtEnd.next = firstNode;

function traverseCircularLinkedList(head, node) {
  if (node === head) {
    return;
  }
  console.log(node.data);

  traverseCircularLinkedList(head, node.next);
}

traverseCircularLinkedList(firstNode, firstNode.next);
