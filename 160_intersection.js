function getIntersectionNode(l1, l2){
  if (!l1 || !l2){
    return null;
  }
  var a = l1;
  var b = l2;
  while (a !== b){
    a = (a === null)?l2:a.next;
    b = (b === null)?l1:b.next;
  }
  return a;
}