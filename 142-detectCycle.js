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
 var detectCycle = function (head) {
    if (!head || !head.next) {
        return null;
    }
    let preIndex = 0;
    head.index = preIndex + 1;
    while (head && head.index > preIndex) {
        preIndex = head.index
        head = head.next;
        if (head && !head.index) {
            head.index = preIndex + 1
        }
    }
    return head
};