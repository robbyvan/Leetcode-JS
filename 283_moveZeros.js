function moveZeroes(nums){
  var j = 0;
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] != 0) {
      var temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
}
// function moveZeroes(nums){
//   var zero = nums.indexOf(0);
//   var len = nums.length;
//   var maxTry = len - zero - 1;
//   var tryed = 0;

//   if (zero === -1){
//     tryed = maxTry;
//   }

//   while (tryed < maxTry){
//     tryed += 1;
//     /*find if there's a number ahead*/
//     for (var i = zero; i < len; i++){
//       if (nums[i] !== 0){
//         number = i;
//         break;//found a num
//       }
//     }
//     if (i === len && nums[len-1] === 0){
//       break; //no need to do this
//     }
//     nums[zero] = nums[number];
//     nums[number] = 0;

//     zero = nums.indexOf(0);
//   }
// }