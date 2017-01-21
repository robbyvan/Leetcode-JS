function rotate(nums, k){
  if (nums.length < 2){
    return;
  }
  k = k % nums.length;
  reverse(nums, 0, nums.length - k - 1);
  reverse(nums, nums.length - k, nums.length - 1);
  nums.reverse();
}

function reverse(nums, i, j){
  while (i < j){
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i += 1;
    j -= 1;
  }
}
// function rotate(nums, k){
//   var n = nums.length;
//   if (k >= n){
//     k = k % n;
//   }
//   if (k !== 0){
//     for (var i = 0; i < k; i++){
//       nums.unshift(nums.pop());
//     }
//   }
// }