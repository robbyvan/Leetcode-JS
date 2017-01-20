function generate(numRows){
  if (numRows < 1){
    return [];
  }
  if (numRows === 1){
    return [[1]];
  }
  if (numRows === 2){
    return [[1],[1, 1]];
  }
  var init = [[1], [1, 1]];//numRows = 3
  for (var i = 2; i < numRows; ++i){
    var last = init[i-1].slice();
    var curr = [1];
    for (var j = 1; j < last.length; ++j){
      curr.push(last[j] + last[j-1]);
    }
    curr.push(1);
    init.push(curr);
  }
  return init;
}