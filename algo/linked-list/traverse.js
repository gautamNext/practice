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

function traverseLinkedList(node) {
  if (node) {
    console.log(node.data);
  }
  if (!node || node.next === null) {
    return;
  }

  traverseLinkedList(node.next);
}

// traverseLinkedList(firstNode);

module.exports = { traverseLinkedList };
