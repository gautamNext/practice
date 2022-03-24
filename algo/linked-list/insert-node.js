const { makeLinkedList, Node } = require("./make-linked-list");
const { traverseLinkedList } = require("./traverse");

const firstNode = makeLinkedList(0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function getNodeAtPosition(pointer, position) {
  let index = 0;

  function nodeAtPosition(node) {
    index = index + 1;
    if (index === position) {
      return node;
    } else {
      return nodeAtPosition(node.next);
    }
  }

  return nodeAtPosition(pointer);
}

function insertNodeAtPosition(node, position) {
  const beforePositionNode = getNodeAtPosition(firstNode, position - 1);
  node.next = beforePositionNode.next;
  beforePositionNode.next = node;
}

// console.log("=======Before==========");
// traverseLinkedList(firstNode);

// const node = new Node(null, 24);

// insertNodeAtPosition(node, 4);

// console.log("=======After==========");
// traverseLinkedList(firstNode);

module.exports = { getNodeAtPosition };
