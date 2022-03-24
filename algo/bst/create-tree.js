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
const b = new Node(null, 34, null);
const c = new Node(null, 54, null);
const a = new Node(null, 50, null);

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

function createBST(nodes) {
  let root = null;
  nodes.forEach((node) => {
    if (root === null) {
      root = node;
    } else {
      insertNodeInBST(root, node);
    }
  });

  return root;
}

const rootNode = createBST([a, b, c, d, e, f, g]);

function inOrderTraverse(node) {
  if (node === null) {
    return;
  }

  inOrderTraverse(node.left);
  console.log(node.data);
  inOrderTraverse(node.right);
}

console.log("==========IN ORDER==========");
inOrderTraverse(rootNode);
console.log("============================");

// console.log(d.right)
