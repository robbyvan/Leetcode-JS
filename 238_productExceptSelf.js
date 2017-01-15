function productExceptSelf(nums){
  var len = nums.length;
  if (len === 0){
    return [];
  }
  var res = [];
  var product = 1;
  for (var i = 0; i < len; i++){
    res[i] = product;
    product = product * nums[i];
  }
  product = 1;
  for (var i = len-1; i > -1; i--){
    res[i] = res[i] * product;
    product = product * nums[i];
  }
  return res;
}