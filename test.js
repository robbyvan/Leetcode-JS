function majorityElement(nums){
  var major = nums[0];
  var counter = 1;
  for (var i = 1; i < nums.length; i++){
    if (counter === 0){
      ++counter;
      major = nums[i];
    }else if (major === nums[i]){
      ++counter;
    }else {
      --counter;
    }
  }
  return major;
}

var nums = [1, 2, 4, 1];
var k = majorityElement(nums);
console.log(k);