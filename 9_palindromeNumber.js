function isPalindrome(num){
  if (num < 0){
    return false;
  }
  var x = num;
  var y = 0;
  while (x > 0){
    y = y * 10;
    y = y + Math.floor(x % 10);
    x = Math.floor(x / 10);
  }
  if (y === num){
    return true;
  }else{
    return false;
  }
}
console.log(isPalindrome(10));