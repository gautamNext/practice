function Node(data, next) {
  this.data = data;
  this.next = next;
}

function Queue() {
  let firstNode = new Node();

  this.first = () => {
    return firstNode.data;
  };

  this.enque = (ele) => {
    const node = new Node(ele, firstNode);
    firstNode = node;
  };

  this.deque = () => {
    const node = firstNode;
    firstNode = node.next;

    return node.data;
  };
}

const q = new Queue();
q.enque(10);
q.enque(11);
q.enque(12);

console.log(q.deque());
console.log(q.first());
