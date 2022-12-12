var mergeTwoLists = function(l1, l2) {
    let current = new ListNode(0);
    let point = current;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            point.next = l1
            l1 = l1.next
        } else {
            point.next = l2
            l2 = l2.next
        }

        point = point.next
    }

    point.next = l1?l1 : l2
    
    return current.next;
};