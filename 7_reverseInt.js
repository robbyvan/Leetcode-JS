/**
 * @param {number} x
 * @return {number}
 */
function reverse(x){
  var flag = false;
  if (x < 0){
    flag = true;
    x = 0 - x;
  }
  var arr = x.toString().split("");
  var str = arr.reverse().join("");
  if (flag){
    str = "-" + str;
  }
  var res = parseInt(str);
  if (res > parseInt("7FFFFFFF", 16) && !flag){
    return 0;
  }else if ( (0-res) > parseInt("7FFFFFFF", 16) && flag){
    return 0;
  }else{
    return res;
  }
}

