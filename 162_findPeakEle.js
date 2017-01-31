function findPeakElement(nums){
  if (nums.length === 0){
    return null;
  }
  if (nums.length === 1){
    return 0;
  }

  var flag = 1;
  var curr = 1;
  var prev = 0;
  while (flag && curr < nums.length){
    if (nums[curr]< nums[prev]){
      return prev;
    }else{
      prev = curr;
      curr += 1;
    }
  }
  return prev;
}