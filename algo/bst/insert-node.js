function Node(left, data, right) {
  this.left = left;
  this.data = data;
  this.right = right;
}

//       50
//    34    54
//  20  38 53 58

const d = new Node(null, 20, null);
const e = new Node(null, 38, null);
const f = new Node(null, 53, null);
const g = new Node(null, 58, null);
const b = new Node(d, 34, e);
const c = new Node(f, 54, g);
const a = new Node(b, 50, c);

function insertNodeInBST(node, toBeInsertedNode) {
  if (node.data === toBeInsertedNode.data) {
    console.log("Node already exist");
    return;
  }

  if (node.data > toBeInsertedNode.data) {
    if (node.left === null) {
      node.left = toBeInsertedNode;
      return;
    } else {
      insertNodeInBST(node.left, toBeInsertedNode);
    }
  } else {
    if (node.right === null) {
      node.right = toBeInsertedNode;
      return;
    } else {
      insertNodeInBST(node.right, toBeInsertedNode);
    }
  }
}

const toBeInsertedNode = new Node(null, 23, null);

insertNodeInBST(a, toBeInsertedNode);

function inOrderTraverse(node) {
  if (node === null) {
    return;
  }

  inOrderTraverse(node.left);
  console.log(node.data);
  inOrderTraverse(node.right);
}

console.log("==========IN ORDER==========");
inOrderTraverse(a);
console.log("============================");

// console.log(d.right)
