function invertTree(root){
  var queue = [];
  if (!root){
    return null;
  }
  queue.push(root);
  while (queue.length > 0){
    var curr = queue.shift();
    if (curr.left){
      queue.push(curr.left);
    }
    if (curr.right){
      queue.push(curr.right);
    }
    var temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;
  }
  return root;
}