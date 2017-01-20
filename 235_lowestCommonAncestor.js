function lowestCommonAncestor(root, p, q){
  if (!p || !q || !root){
    return null;
  }
  if (p.val <= root.val && q.val >= root.val){
    return root;
  }else if (p.val >= root.val && q.val <= root.val){
    return root;
  }else if (root.val > q.val){
    return lowestCommonAncestor(root.left, p, q);
  }else{
    return lowestCommonAncestor(root.right, p, q);
  }
}