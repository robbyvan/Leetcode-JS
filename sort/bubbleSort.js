function bubbleSort(nums){
  var flag = true;
  var count = 0;
  while (count < nums.length && flag){
    flag = false;
    for (var i = 0; i < nums.length - count - 1; i++){
      if (nums[i] > nums[i+1]){
        var temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        flag = true;
      }
    }
    return nums;
  }
}

var num = [49, 97, 38, 50, 76, 65, 13, 27, 25];
console.log(num);
bubbleSort(num);
console.log(num);