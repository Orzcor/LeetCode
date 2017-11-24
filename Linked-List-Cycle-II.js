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
var detectCycle = function(head) {
    if(head === null || head.next === null) return null

    let first = head,
        second = head,
        isCycle = false

    while(first !== null && second !== null){
        first = first.next
        if(second.next === null) return null
        second = second.next.next
        if(first === second){
            isCycle = true
            break
        }
    }

    if(!isCycle) return null

    first = head
    while(first !== second){
        first = first.next
        second = second.next
    }

    return first
};