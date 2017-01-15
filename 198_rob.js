function rob(number){
  var fortune = [];
  if (number.length === 0){
    return 0;
  }else if (number.length === 1){
    return number[0];
  }else if (number.length === 2){
    return Math.max(number[0], number[1]);
  }

  fortune.push(number[0]);
  fortune.push(number[1]);
  for (var i = 2; i < number.length; i++){
    var fortune2 = findMax(fortune, i - 2);
    var fortune1 = fortune[i - 1];
    fortune[i] = Math.max(fortune1, fortune2 + number[i]);
  }

  return fortune[fortune.length - 1];
}

function findMax(fortune, n){
  var res = fortune[0];
  for (var i = 0; i <= n; i++){
    if (res < fortune[i]){
      res = fortune[i];
    }
  }
  return res;
}

var arr = [1,2,1,1];
var r = rob(arr);
console.log(r);