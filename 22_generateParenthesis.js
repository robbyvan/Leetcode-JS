function generateParenthesis(n){
  var res = [];
  var path = "";
  generate(res, path, n, n);
  console.log(res);
  return res;
}

function generate(res, comb, left, right){
  if (left === 0 && right === 0){
    res.push(comb);
    return;
  }
  if (left > 0){
    generate(res, comb + "(", left - 1, right);
  }
  if (left < right && right > 0){
    generate(res, comb + ")", left, right - 1);
  }
}