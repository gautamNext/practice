const { makeLinkedList } = require("./make-linked-list");
const { getNodeAtPosition } = require("./insert-node");

const firstNode = makeLinkedList(0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function gerenrateRandom() {
  return parseInt(Math.random() * 10);
}

const position = gerenrateRandom();

const nodeAtPosition = getNodeAtPosition(firstNode, position);
const nodeAtEnd = getNodeAtPosition(firstNode, 9);

nodeAtEnd.next = nodeAtPosition;

function isLoopExist(slowHead, fastHead) {
  if (
    !slowHead ||
    !fastHead ||
    !slowHead.next ||
    !fastHead.next ||
    !fastHead.next.next
  ) {
    console.log("No loop exist");
    return;
  }
  if (slowHead === fastHead) {
    console.log("Yes loop exist");
    return;
  }

  isLoopExist(slowHead.next, fastHead.next.next);
}

isLoopExist(firstNode, firstNode.next);
