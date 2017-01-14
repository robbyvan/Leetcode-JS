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
    var John = head;
    var Snow = head;
    var circle = false;
    while (John && Snow){
        John = John.next;
        if (Snow.next){
          Snow = Snow.next.next;
        }else{
            break;
        }
        if (John === Snow){
            circle = true;
            break;
        }
    }
    return circle;
};