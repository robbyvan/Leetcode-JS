/**
 * @param {number} num
 * @return {number[]}
 */
function countBits(num){
  var bits = [0];
  if (num < 1){
    return bits;
  }
  var i = 0;
  var index = 1;
  var high = index * 2;
  while (index <= num){
    bits.push(bits[i] + 1);
    index++;
    i++;
    if (index === high){
      high = index * 2;
      i = 0;
    }
  }
  return bits;
}