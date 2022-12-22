// 翻转 链表
var reverseList = function(head) {
    if (!head) return head;
    const current = new ListNode(0);
    let point = current;
    function helper(node) {
        if (node.next) {
            const val = helper(node.next);
            point.next = new ListNode(val)
            point = point.next;
        }
        return node.val
    }
    helper(head)
    point.next = new ListNode(head.val)
    point = point.next;
    return current.next;
};