function summaryRanges(nums){
  if (nums.length === 0){
    return nums;
  }

  if (nums.length === 1){
    nums[0] = nums[0].toString();
    return nums;
  }

  var res = [];
  var str = "";

  for (var low = 0, high = 1; high < nums.length;){
    if (nums[high] === nums[high-1] + 1){
      high = high + 1;
    }else{
      if (high - low > 1){
        str = nums[low] + "->" + nums[high-1];
      }else{
        str = nums[low].toString();
      }
      res.push(str);
      low = high;
      high = 1 + high;
    }
  }

  if (high - low > 1){
    str = nums[low] + "->" + nums[high-1];
  }else{
    str = nums[low].toString();
  }
  res.push(str);
  return res;
}