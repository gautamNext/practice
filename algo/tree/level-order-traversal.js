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

function levelOrderTraverse(node) {
  const queue = [];
  queue.push(node);

  while (queue.length) {
    if (queue[0] && queue[0].left) {
      queue.push(queue[0].left);
    }
    if (queue[0] && queue[0].right) {
      queue.push(queue[0].right);
    }
    console.log(queue[0].data);
    queue.shift();
  }
}

levelOrderTraverse(a);
