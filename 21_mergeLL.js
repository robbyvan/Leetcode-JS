function mergeTwoLists(l1, l2){
  if (!l1){
    return l2;
  }
  if (!l2){
    return l1;
  }
  var head = l1;
  var main = l1;
  var branch = l2;
  if (l1.val > l2.val){
    head = l2;
    main = l2;
    branch = l1;
  }
  do {
    if (main.next === null){
      main.next = branch;
      break;
    }
    if (main.next.val <= branch.val){
      main = main.next;
    }else{
      var temp = main.next;
      main.next = branch;
      main = main.next;
      branch = branch.next;
      main.next = temp;
    }
  }while (main && branch);
  return head;
}