function containsNearbyDuplicate(nums, k){
  var map = {};
  var i = 0
  while (i < nums.length){
    var key = nums[i];
    if (map[key] === undefined){
      map[key] = i;
    }else{
      if (i - map[key] <= k){
        return true;
      }else{
        map[key] = i;
      }
    }
    i += 1;
  }
  return false;
}