const { makeDoubleLinkedList } = require("./double-linked-list");

const firstNode = makeDoubleLinkedList(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  0,
  null
);

function reverseDoubleLinkedList(node) {
  if (node === null || node.next === null) {
    return node;
  }

  const headNode = reverseDoubleLinkedList(node.next);
  node.next.next = node;
  node.next.prev = null;

  node.next = null;
  node.prev = node.next;

  return headNode;
}

const headNew = reverseDoubleLinkedList(firstNode);

function traverseDoubleLinkedList(node) {
  if (node === null) {
    return;
  }
  console.log(node.data);
  traverseDoubleLinkedList(node.next);
}

traverseDoubleLinkedList(headNew);
