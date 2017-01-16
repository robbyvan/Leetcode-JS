function trailingZeroes(n){
  var count = 0;
  var curr = 10;
  var pow = 1;
  while (curr < n){
    count += pow;
    pow += 1;
    curr = curr * 10;
  }
  return count;
}