function missingNumber(nums){
  var n = nums.length;
  nums.sort(function(a, b){
    return a-b;
  });
  var low = 0, high = n;
  var mid = Math.floor((low + high)/2);
  while (low < high){
    mid = Math.floor((low + high)/2);
    if (mid !== nums[mid]){
      high = mid;
    }else{
      low = mid + 1;
    }
  }
  return low;
}

function missingNumber(nums){
  var res = nums.length;
    for(var i=0; i<nums.length; i++){
        res ^= i;
        res ^= nums[i];
    }
    return res;
}
