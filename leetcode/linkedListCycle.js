/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) {
        return false;
    }
    
    var oneElement = head,
        twoElement = head;
    
    if (twoElement.next !== null && twoElement.next.next !== null) {
        oneElement = oneElement.next;
        twoElement = twoElement.next.next;
        if (oneElement === twoElement) {
            return true;
        }
    }
    
    return false;
};
