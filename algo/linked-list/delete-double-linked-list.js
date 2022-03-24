const { makeDoubleLinkedList } = require("./double-linked-list");

const firstNode = makeDoubleLinkedList(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  0,
  null
);

function deleteDataNode(node, position){
    if(node.next && node.next.data === position){
        node.next = node.next.next;
        node.next.prev = node;
        return;
    }

    deleteDataNode(node.next, position);
}

deleteDataNode(firstNode, 5);

function traverseDoubleLinkedList(node) {
    if (node === null) {
      return;
    }
    console.log(node.data);
    traverseDoubleLinkedList(node.next);
  }
traverseDoubleLinkedList(firstNode);

