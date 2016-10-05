/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!(l1 && l2)) {
    return l1 ? l1 : l2;
  }
  var val = 0;
  var head;
  var tail;
  var node;

  while (l1 && l2 || val) {
    if (l1 && l2) {
      val += l1.val + l2.val;
      node = new ListNode(val % 10);
      if (head) {
        tail.next = node;
        tail = tail.next;
      } else {
        head = node;
        tail = node;
      }
      val = val >= 10 ? 1 : 0;
      l1 = l1.next;
      l2 = l2.next;
    }
  }

  while (l1) {
    val += l1.val;
    node = new ListNode(val % 10);
    tail.next = node;
    tail = tail.next;
    val = val >= 10 ? 1 : 0;
    l1 = l1.next;
  }

  while (l2) {
    val += l2.val;
    node = new ListNode(val % 10);
    tail.next = node;
    tail = tail.next;
    val = val >= 10 ? 1 : 0;
    l2 = l2.next;
  }

  // if (val) {
  //     node = node = new ListNode(val);
  //     tail.next = node;
  //     tail = tail.next;
  // }

  return head;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}
var l11 = new ListNode(2);
var l12 = new ListNode(4);
var l13 = new ListNode(3);
l11.next = l12;
l12.next = l13;
var l21 = new ListNode(5);
var l22 = new ListNode(6);
var l23 = new ListNode(4);
l21.next = l22;
l22.next = l23;
addTwoNumbers(l11, l21);
