function longestCommonPrefix(strs){
  if (strs.length === 0){
    return "";
  }
  strs.sort();
  var common = "";
  var last = strs[strs.length - 1];
  var first = strs[0];
  var index = 0;
  while ( index < first.length){
    var curr = first.charAt(index);
    if (curr !== last.charAt(index)){
      break;
    }else{
      common += curr;
      index += 1;
    }
  }
  return common;
}