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
const deleteDuplicates = (head) => {
  if (head === null) {
    return null;
  }
  let curr = head;
  while (curr.next !== null) {
    if (curr.next.val === curr.val) {
      curr.next = curr.next.next;
    }else {
      curr = curr.next;
    }
  }
  return head;
};