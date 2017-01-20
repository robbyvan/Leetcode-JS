function removeElement(nums, val){
  var begin = 0;
  for (var i = 0; i < nums.length; ++i){
    if (nums[i] !== val){
      nums[begin] = nums[i];
      begin += 1; 
    }
  }
  return begin;
}