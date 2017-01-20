function isPalindrome(head){
  var fast = head;
  var slow = head;
  while (fast !== null && fast.next !== null){
    fast = fast.next.next;
    slow = slow.next;
  }
  if (fast !== null){
    slow = slow.next;
  }
  slow = reverse(slow);
  fast = head;
  while (slow !== null){
    if (slow.val !== fast.val){
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
}
function reverse(head){
  var prev = null;
  while (head !== null){
    var next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}