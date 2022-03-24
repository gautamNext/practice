function Node(left, data, right) {
  this.left = left;
  this.data = data;
  this.right = right;
}

//     A
//    B C
//   D EF G
//  H

const h = new Node(null, "H", null);
const d = new Node(h, "D", null);
const e = new Node(null, "E", null);
const f = new Node(null, "F", null);
const g = new Node(null, "G", null);
const b = new Node(d, "B", e);
const c = new Node(f, "C", g);
const a = new Node(b, "A", c);

function printLeafNodes(node) {
  if (node === null) {
    return;
  }
  if (node.left === null && node.right === null) {
    console.log(node.data);
  }

  printLeafNodes(node.left);
  printLeafNodes(node.right);
}

printLeafNodes(a);
