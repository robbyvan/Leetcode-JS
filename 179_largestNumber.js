/**
 * @param {number[]} nums
 * @return {string}
 */
function largestNumber(nums){
  for (var i = 0; i < nums.length; ++i){
    nums[i] = nums[i].toString();
  }
  nums.sort(function(a, b){
    var s1 = a + b;
    var s2 = b + a;
    return (s2 - s1);
  });
  if (nums[nums.length - 1] === "0" && nums[0] === "0"){
    return "0";
  }
  return nums.join("");
}