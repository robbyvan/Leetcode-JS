function permute(nums){
  var n = nums.length;
  var ans = generate(nums, n);
  return ans;
}

function generate(nums, n){
  if (n === 0){
    return [];
  }else if (n === 1){
    return [[nums[0]]];
  }else{
    var res = [];
    var curr = nums[n-1];
    var prevRes = generate(nums, n-1);

    for (var i = 0; i < prevRes.length; ++i){

      for (var j = 0; j < n; ++j){
        var prevElem = prevRes[i].slice();
        prevElem.splice(j, 0, curr);
        res.push(prevElem);
      }
    }
    return res;
  }
}