function adjustHeap(nums, i, n){
  var root = nums[i];
  var j = i * 2;
  while (j <= n){
    var curr = nums[j];
    if (j < n && nums[j] < nums[j+1]){
      j += 1;
    }
    if (root >= nums[j]){
      break;
    }
    nums[Math.floor(j/2)] = nums[j];
    j = j * 2;
  }
  nums[Math.floor(j/2)] = root;
}

function heapSort(nums){
  var n = nums.length;
  nums.splice(0, 0, undefined);
  for (var i = Math.floor(nums.length/2); i > 0; i--){
    adjustHeap(nums, i, n);
  }
  for (i = n - 1; i > 0; i--){
    var temp = nums[i+1];
    nums[i+1] = nums[1];
    nums[1] = temp;
    adjustHeap(nums, 1, i);
  }
  nums.shift();
}

var num = [49, 97, 38, 50, 76, 65, 13, 27, 25];
console.log(num);
heapSort(num);
console.log(num);