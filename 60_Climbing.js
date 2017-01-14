function climbStairs(n){
  var ways = 0;
  var way1 = 1;
  var way2 = 2;
  if (n === 0){
    return 0;
  }
  if (n === 1){
    return 1;
  }
  if (n === 2){
    return 2;
  }
  for (var i = 3; i <= n; i++){
    ways = way1 + way2;
    way1 = way2;
    way2 = ways;
  }
  return ways;
}