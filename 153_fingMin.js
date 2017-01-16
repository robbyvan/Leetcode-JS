function findMin(nums){
    var low = 0;
    var high = nums.length - 1;
    if (nums[0] <= nums[nums.length - 1]){
        return nums[0];
    }
    while (low !== high-1){
        var mid = low + Math.floor((high - low) / 2);
        if (nums[mid] > nums[low]){
            low = mid;
        }
        if (nums[mid] < nums[high]){
            high = mid;
        }
        if (low === high){
            break;
        }
    }
    if (nums[low] < nums[high]){
        return nums[low];
    }else{
        return nums[high];
    }
}