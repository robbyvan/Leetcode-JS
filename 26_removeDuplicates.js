function removeDuplicates(nums){
  if (nums.length === 0){
    return 0;
  }
  for (var i = 0, j = 1; j < nums.length; j++){
    if (nums[j] !== nums[i]){
      i = i + 1;
      nums[i] = nums[j];
    }
  }
  return (i+1);
}