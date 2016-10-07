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

  return head;
};
