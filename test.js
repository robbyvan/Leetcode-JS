function isSameTree(p ,q){
}

function preOrder(root){
  var res = [];
  if (root){
    res.push(root.val);
    res.concat(preOrder(root.left));
    res.concat(preOrder(root.right));
  }else{
    return res;
  }
}
function inOrder(root){
  var res = [];
  if (root){
    res.concat(inOrder(root.left));
    res.push(root.val);
    res.concat(inOrder(root.right));
  }else{
    return res;
  }
}