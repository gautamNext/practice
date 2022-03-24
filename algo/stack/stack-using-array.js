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

const stack1 = new Stack();
stack1.push(42);
stack1.push(12);
stack1.push(32);
stack1.log();
stack1.pop();
stack1.log();
