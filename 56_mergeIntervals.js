function merge(intervals){
  if (intervals.length === 0){
    return [];
  }
  intervals.sort(function(a, b){
    return (a.start - b.start);
  });
  var res = [];
  for (var i = 0; i < intervals.length; ){
    var low = intervals[i].start;
    var high = intervals[i].end;
    while (i < intervals.length - 1){
      if (high >= intervals[i+1].start){
        high = Math.max(intervals[i+1].end, high);
        i = i + 1;
      }else{
        break;
      }
    }
    res.push([low, high]);
    i = i + 1;
  }
  return res;
}