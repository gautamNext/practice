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

function getInOrderPredecessor(node) {
  if (!node) {
    return;
  }
  if (node && node.right === null) {
    return node;
  }

  return getInOrderPredecessor(node.right);
}

function deletedNode(node, toBeDeletedNode) {
  if (node === null) {
    return;
  }

  if (node.data === toBeDeletedNode.data) {
    console.log("Node found!");
    return node;
  }

  if (node.data > toBeDeletedNode.data) {
    if (node && node.left === null) {
      return;
    } else {
      const toBeDeletedNodeExist = deletedNode(node.left, toBeDeletedNode);
      if (toBeDeletedNodeExist) {
        if (toBeDeletedNodeExist.left && toBeDeletedNodeExist.right) {
          const inOrderPredecessor = getInOrderPredecessor();
          deletedNode(node, inOrderPredecessor);
          inOrderPredecessor.left = toBeDeletedNodeExist.left;
          inOrderPredecessor.right = toBeDeletedNodeExist.right;
        } else if (toBeDeletedNodeExist.left) {
          node.left = toBeDeletedNodeExist.left;
        } else if (toBeDeletedNodeExist.right) {
          node.right = toBeDeletedNodeExist.right;
        }
      }
    }
  } else {
    if (node && node.right === null) {
      return;
    } else {
      const toBeDeletedNodeExist = deletedNode(node.right, toBeDeletedNode);
      if (toBeDeletedNodeExist) {
        if (toBeDeletedNodeExist.left && toBeDeletedNodeExist.right) {
          const inOrderPredecessor = getInOrderPredecessor();
          deletedNode(node, inOrderPredecessor);
          inOrderPredecessor.left = toBeDeletedNodeExist.left;
          inOrderPredecessor.right = toBeDeletedNodeExist.right;
        } else if (toBeDeletedNodeExist.left) {
          node.left = toBeDeletedNodeExist.left;
        } else if (toBeDeletedNodeExist.right) {
          node.right = toBeDeletedNodeExist.right;
        }
      }
    }
  }
}

const toBeDeletedNode = new Node(null, 54, null);

deletedNode(a, toBeDeletedNode);

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
