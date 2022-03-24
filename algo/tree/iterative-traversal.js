function Stack() {
  this.arr = [];
}

Stack.prototype.push = function (ele) {
  this.arr[this.arr.length] = ele;
  return true;
};

Stack.prototype.pop = function () {
  const ele = this.arr[this.arr.length - 1];
  this.arr.length = this.arr.length - 1;
  return ele;
};

Stack.prototype.log = function () {
  console.log(this.arr);
};

function Node(left, data, right) {
  this.left = left;
  this.data = data;
  this.right = right;
}

//     A
//    B C
//   D EF G

const d = new Node(null, "D", null);
const e = new Node(null, "E", null);
const f = new Node(null, "F", null);
const g = new Node(null, "G", null);
const b = new Node(d, "B", e);
const c = new Node(f, "C", g);
const a = new Node(b, "A", c);

function inOrderTraverse(node) {
  while (node !== null) {
    
  }

  inOrderTraverse(node.left);
  console.log(node.data);
  inOrderTraverse(node.right);
}

console.log("==========IN ORDER==========");
inOrderTraverse(a);
console.log("============================");

function preOrderTraverse(node) {
  if (node === null || node.left === null) {
    console.log(node.data);
    return;
  }

  console.log(node.data);
  preOrderTraverse(node.left);
  preOrderTraverse(node.right);
}

console.log("==========PRE ORDER==========");
preOrderTraverse(a);
console.log("============================");

function postOrderTraverse(node) {
  if (node === null || node.left === null) {
    console.log(node.data);
    return;
  }

  postOrderTraverse(node.left);
  postOrderTraverse(node.right);
  console.log(node.data);
}

console.log("==========POST ORDER==========");
postOrderTraverse(a);
console.log("============================");
