/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null

    let a = headA,
        b = headB,
        isChange = false

    while(a !== b){
        a = a.next
        b = b.next
        if(a === null && b === null && isChange) return null
        if(a === null){
            a = headB
            isChange = true
        }
        if(b === null){
            b = headA
            isChange = true
        }
        // a = a.next === null ? headB : a.next
        // b = b.next === null ? headA : b.next
    }

    return a
};