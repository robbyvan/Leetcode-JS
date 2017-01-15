function countAndSay(n){
  if (n < 1){
    return null;
  }
  var s = "1";
  var str = "1";
  for (var i = 0; i < n-1; i++){    
    var index = 0;
    str = "";
    do{
      var curr = s.charAt(index);
      var count = 0;
      for (var j = index; j < s.length && s.charAt(j) === curr; j++){
        count += 1;
        index += 1;
      }
      str = str + count.toString() + curr;
    }while (index < s.length)
    s = str;
  }
  return str;
}