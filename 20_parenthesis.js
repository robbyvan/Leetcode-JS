function isValid(s){
  var map = {
    '{': 3,
    '[': 2,
    '(': 1,
    '}': -3,
    ']': -2,
    ')': -1
  };
  var stack = [];
  for (var i = 0; i < s.length; i++){
    var curr = s.charAt(i);
    if (stack.length > 0){
      var prev = stack[stack.length - 1];
    }else{
      stack.push(curr);
      continue;
    }
    if (map[prev] * map[curr] > 0){
      stack.push(curr);
    }else if (map[prev] + map[curr] === 0){
      stack.pop();
    }else {
      return false;
    }
  }

  if (stack.length === 0){
    return true;
  }else{
    return false;
  }
}

var arr = "()[]{}{[]()}";
var boo = isValid(arr);
console.log(boo);