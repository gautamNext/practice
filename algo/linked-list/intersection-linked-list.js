function Node(data, next) {
  this.next = next;
  this.data = data;
}

const tail = new Node("tail", null);
const com3 = new Node(3, tail);
const com2 = new Node(2, com3);
const com1 = new Node(1, com2);
const com0 = new Node(0, com1);

const node13 = new Node(13, com0);
const node12 = new Node(12, node13);
const node11 = new Node(11, node12);

const node25 = new Node(25, com0);
const node24 = new Node(24, node25);
const node23 = new Node(23, node24);
const node22 = new Node(22, node23);
const node21 = new Node(21, node22);

function traverseLinkedList(node) {
  if (node) {
    console.log(node.data);
  }
  if (!node || node.next === null) {
    return;
  }

  traverseLinkedList(node.next);
}

traverseLinkedList(node21);
traverseLinkedList(node11);

function findIntersection(node1, node2) {
  if (
    (node1 === null || node1.next === null) &&
    (node2 === null || node2.next === null)
  ) {
    return;
  }

  if (node1.next && node2.next) {
    findIntersection(node1.next, node2.next);
  } else if (node1.next) {
    findIntersection(node1.next, node2);
  }else if (node2.next) {
    findIntersection(node1, node2.next);
  }

  if(node1 !== node2){
    return node1.next;
  }
}

const intersection = findIntersection(node21, node11);

console.log(intersection.data);
