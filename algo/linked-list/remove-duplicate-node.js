const { makeLinkedList } = require("./make-linked-list");
const { traverseLinkedList } = require("./traverse");

const firstNode = makeLinkedList(0, [1, 9, 3, 4, 6, 6, 7, 8, 9, 10]);

function removeDuplicate(node) {
  const mapper = {};

  function remove(nextNode) {
    mapper[nextNode.data] = 1;
    const nextToNextNode = nextNode.next;
    if (nextToNextNode && mapper[nextToNextNode.data]) {
      nextNode.next = nextToNextNode.next;
    }

    nextNode.next ? remove(nextNode.next) : null;
  }

  remove(node);
}

console.log("=======Before==========");
traverseLinkedList(firstNode);

removeDuplicate(firstNode);

console.log("=======After==========");
traverseLinkedList(firstNode);
