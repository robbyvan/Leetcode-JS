function titleToNumber(str){
  var arr = str.split("");
  for (var i = 0; i < arr.length; ++i){
    arr[i] = arr[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  var sum = 0;
  for (i = arr.length-1; i > -1; i--){
    sum = sum + arr[i] * Math.pow(26, arr.length - i - 1);
  }
  return sum;
}
console.log(titleToNumber("A"));