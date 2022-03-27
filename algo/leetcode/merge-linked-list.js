/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = {};
  curr = head;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      curr.next = list2;
      list2 = list2.next;
      curr = curr.next;
    } else {
      curr.next = list1;
      list1 = list1.next;
      curr = curr.next;
    }
  }

  if (list1) {
    curr.next = list1;
  }

  if (list2) {
    curr.next = list2;
  }

  return head.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1_4 = new ListNode(4, null);
const node1_2 = new ListNode(2, node1_4);
const head1 = new ListNode(1, node1_2);

const node2_4 = new ListNode(4, null);
const node2_3 = new ListNode(3, node2_4);
const head2 = new ListNode(1, node2_3);

// [1,2,4]
// [1,3,4]

let result = mergeTwoLists(head1, head2);

while (result) {
  console.log(result.val);
  result = result.next;
}
