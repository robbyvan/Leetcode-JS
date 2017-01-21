/**
 * @param {number} n
 * @return {number}
 */
function numTrees(n){
  var tree = [];
  tree[0] = 1;
  tree[1] = 1;
  for (var i = 2; i <= n; ++i){
    tree[i] = 0;
    for (var j = 1; j <= i; ++j){
      tree[i] = tree[i] + tree[j-1] * tree[i-j];
    }
  }
  return tree[n];
}