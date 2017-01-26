function insertionSortList(head){
  var start = head;
  var curr = head;
  var min = start;
  while (start !== null){
    while (curr !== null){
      if (curr.val < min.val){
        min = curr;
      }
      curr = curr.next;
    }
    var temp = min.val;
    min.val = start.val;
    start.val = temp;

    start = start.next;
    curr = start;
    min = start;
  }
  return head;
}