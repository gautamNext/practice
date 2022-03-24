class Node {
  constructor(data, left, right) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  inorderTraversal(node) {
    if (!node) {
      return;
    }
    this.inorderTraversal(node.left);
    console.log(node.data);
    this.inorderTraversal(node.right);
  }
  preOrderTraversal(node) {
    if (!node) {
      return;
    }
    console.log(node.data);
    this.preOrderTraversal(node.left);
    this.preOrderTraversal(node.right);
  }
  postOrderTraversal(node) {
    if (!node) {
      return;
    }
    this.postOrderTraversal(node.left);
    this.postOrderTraversal(node.right);
    console.log(node.data);
  }

  removeLeafNodes(node) {
    if (!node) {
      return;
    }
    if (node.left && node.right) {
      this.removeLeafNodes(node.left);
      this.removeLeafNodes(node.right);
    } else {
      node.left = null;
      node.right = null;
    }
  }
}
// E.g below is the tree
//
//          9
//      8       78
//   1      7       67
// 4    6
//

const node4 = new Node(4, null, null);
const node6 = new Node(6, null, null);
const node1 = new Node(1, node4, node6);
const node7 = new Node(7, null, null);
const node67 = new Node(67, null, null);
const node8 = new Node(8, node1, node7);
const node78 = new Node(78, null, node67);
const node9 = new Node(9, node8, node78);

const tree = new Tree(node9);
console.log("preOrderTraversal");
tree.preOrderTraversal(tree.root);

console.log("postOrderTraversal");
tree.postOrderTraversal(tree.root);

console.log("inorderTraversal");
tree.inorderTraversal(tree.root);

console.log("Remove leaf nodes.......................");
tree.removeLeafNodes(tree.root);
tree.preOrderTraversal(tree.root);
