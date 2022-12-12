var mergeTwoList = function(l1, l2) {
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

var mergeKLists = function(lists) {
    let current = new ListNode(0)
    let point = current;
    for(let i = 0; i < lists.length; i++) {
        point.next = mergeTwoList(point.next, lists[i])
    }
    return current.next
};