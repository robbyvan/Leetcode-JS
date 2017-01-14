function lengthLongestPath(str){
  var stack = [0];
  var maxLen = 0;
  var paths = str.split("\n");

  for (var i = 0; i < paths.length; i++){
    var s = paths[i];
    var lvl = s.lastIndexOf("\t") + 1;
    while (lvl + 1 < stack.length){
      stack.pop();
    }
    var len = stack[stack.length-1] + s.length - lvl + 1;
    stack.push(len);
    if (s.indexOf(".") !== -1){
      maxLen = Math.max(len - 1, maxLen)
    }
  }
  return maxLen;
}