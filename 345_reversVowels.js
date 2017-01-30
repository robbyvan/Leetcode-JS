function reverseVowels(s){
  if (s === ""){
    return s;
  }
  var map = {
    "a": true,
    "e": true,
    "i": true,
    "o": true,
    "u": true
  };

  var strArr = s.split("");
  for (var i = 0, j = strArr.length - 1; i < j; ){
    while (i < j){
      if (!map[strArr[i]]){
        i += 1;
      }else{
        break;
      }
    }
    while (j > i){
      if (!map[strArr[j]]){
        j -= 1;
      }else{
        break;
      }
    }
    var temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    i += 1;
    j -= 1;
  }
  console.log(strArr.join(""));
}
reverseVowels("aA");