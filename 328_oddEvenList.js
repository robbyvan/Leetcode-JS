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
function oddEvenList(head){
  if (!head){
    return null;
  }
  if (head){
    var oddHead = head;
  }
  if (head.next){
    var evenHead = head.next;
  }else {
    var evenHead = null;
  }

  var oddCurr = oddHead;
  var evenCurr = evenHead;
  var flag = true;
  if (!oddCurr.next || !evenCurr.next){
    flag = false;
  }

  while (flag){
    if (!evenCurr.next){
      oddCurr.next = null;
      flag = false;
    }else{
      oddCurr.next = evenCurr.next;
      oddCurr = oddCurr.next;
    }
    if (!oddCurr.next){
      evenCurr.next = null;
      flag =false;
    }else{
      evenCurr.next = oddCurr.next;
      evenCurr = evenCurr.next;
    }
  }
  oddCurr.next = evenHead;
  return oddCurr;
}