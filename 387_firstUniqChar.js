function firstUniqChar(s){
  var map = {};
  for (var i = 0; i < s.length; ++i){
    var key = s.charAt(i);
    if (map[key] === undefined){
      map[key] = [i];
    }else{
      map[key].push(i);
    }
  }
  var first = s.length;
  for (key in map){
    if (map[key].length > 1){
      continue;
    }
    if (map[key][0] < first){
      first = map[key][0];
    }
  }
  if (first === s.length){
    return -1;
  }else{
    return first;
  }
}