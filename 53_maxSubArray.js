function maxSubArray(nums){
  var n = nums.length;
  if (n === 0){
    return 0;
  }
  var maxSum = [];
  maxSum.push(nums[0]);
  var maxVal = nums[0];
  for (var i = 1; i < n; ++i){
    var sum = maxSum[i-1] + nums[i];
    if (sum > nums[i]){
      maxSum[i] = sum;
    }else{
      maxSum[i] = nums[i];
    }
    if (maxSum[i] > maxVal){
      maxVal = maxSum[i];
    }
  }
  return maxVal;
}