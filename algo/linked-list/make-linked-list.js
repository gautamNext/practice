function Node(next, data) {
  this.next = next;
  this.data = data;
}

function makeLinkedList(index, dataArray) {
  if (index === dataArray.length) {
    return null;
  }

  const nextNode = makeLinkedList(index + 1, dataArray);

  return new Node(nextNode, dataArray[index]);
}

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

module.exports = { firstNode, makeLinkedList, Node, getNodeAtPosition };
