function containsDuplicate(nums){
  var map = {};
  for (var i = 0; i < nums.length; ++i){
    var curr = nums[i];
    if (map[curr]){
      return true;
    }
    map[curr] = true;
  }
  return false;
}