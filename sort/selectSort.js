function selectSort(nums){
  for (var i = 0; i < nums.length - 1; i++){
    var index = i;
    for (var j = i+1; j < nums.length; j++){
      if (nums[index] > nums[j]){
        index = j
        var temp = nums[i];
        nums[i] = nums[index];
        nums[index] = temp;
      }
    }
  }
}

var num = [1, 3, 2, 8, 5];
console.log(num);
selectSort(num);
console.log(num);