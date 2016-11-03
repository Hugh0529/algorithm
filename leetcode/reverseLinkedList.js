/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var tmp = null;
    
    while (head !== null) {
        let next = head.next;
        head.next = tmp;
        tmp = head;
        head = next;
    }
    
    return tmp;
};
