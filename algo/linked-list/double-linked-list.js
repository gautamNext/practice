function Node(data, next, prev) {
  this.next = next;
  this.prev = prev;
  this.data = data;
}

let head = null;

function makeDoubleLinkedList(arr, i, prev) {
  if (arr.length === i) {
    return;
  }

  const node = new Node(arr[i], null, prev);

  if (prev) {
    prev.next = node;
  }

  if (!head) {
    head = node;
  }

  makeDoubleLinkedList(arr, i + 1, node);

  return head;
}

const heado = makeDoubleLinkedList([1, 2, 3, 4, 5, 6, 7], 0, null);

function traverseDoubleLinkedList(node) {
  if (node === null) {
    return;
  }
  console.log(node.data);
  traverseDoubleLinkedList(node.next);
}
// traverseDoubleLinkedList(heado);

module.exports = { makeDoubleLinkedList };
