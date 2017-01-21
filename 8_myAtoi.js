/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str){
  if (str === ""){
    return 0;
  }

  for (var i = 0; str.charAt(i) === " "; i++);
  str = str.slice(i, str.length);
  
  if (str === ""){
    return 0;
  }
  
  var neg = false;
  if (str.charAt(0) === '-'){
   neg = true; 
   str = str.slice(1, str.length);
  }else if (str.charAt(0) === '+'){
   str = str.slice(1, str.length);
  }
  var integer = 0;
  for (i = 0; i < str.length; ++i){
    var tempS = str.charCodeAt(i);
    var tempN = tempS - "0".charCodeAt(0);
    if (tempN > 10 || tempN < 0){
      break;
    }
    integer = integer * 10 + tempN;
  }
  if (neg){
    if (integer > 2147483648){
      integer = 2147483648;
    }
    return (0 - integer);
  }else{
    if (integer > 2147483647){
      integer = 2147483647;
    }
    return integer;
  }
}
