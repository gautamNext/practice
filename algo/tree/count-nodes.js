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

function findNodeCount(node) {
  let count = 0;

  function getCount(nextNode) {
    if (nextNode === null) {
      return;
    } else {
      count = count + 1;
    }

    getCount(nextNode.left);
    getCount(nextNode.right);
  }

  getCount(node);

  return count;
}

console.log(findNodeCount(a));
