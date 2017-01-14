function fizzBuzz(n){
  var arr = [];
  for (var i = 1; i <= n; i++){
    var str = "";
    if (i % 3 !== 0 && i % 5 !== 0){
      str = i.toString();
      arr.push(str);
      continue;
    }
    if (i % 3 === 0){
      str += "Fizz";
    }
    if (i % 5 === 0){
      str += "Buzz";
    }
    arr.push(str);
  }
  return arr;
}