function addBinary(a, b){
  var i = a.length - 1;
  var j = b.length - 1;
  if (i === -1){
    return j;
  }
  if (j === -1) {
    return i;
  }
  var str = "";
  var carry = 0;
  do {
    var digit = 0;
    var sum = parseInt(a.charAt(i)) + parseInt(b.charAt(j)) + carry;
    switch(sum){
      case 0:
        digit = 0;
        carry = 0;
        break;
      case 1:
        digit = 1;
        carry = 0;
        break;
      case 2:
        digit = 0;
        carry = 1;
        break;
      case 3:
        digit = 1;
        carry = 1;
        break;
    }
    str = digit + str;
    i -= 1;
    j -= 1;
  }while (i > -1 && j > -1);
  if (i > -1){
      do {
        sum = parseInt(a.charAt(i)) + carry;
        switch(sum){
          case 0:
            digit = 0;
            carry = 0;
            break;
          case 1:
            digit = 1;
            carry = 0;
            break;
          case 2:
            digit = 0;
            carry = 1;
            break;
        }
        str = digit + str;
        i -= 1;
      }while (i > -1);
  }
  if (j > -1){
    do {
        sum = parseInt(b.charAt(j)) + carry;
        switch(sum){
          case 0:
            digit = 0;
            carry = 0;
            break;
          case 1:
            digit = 1;
            carry = 0;
            break;
          case 2:
            digit = 0;
            carry = 1;
            break;
        }
        str = digit + str;
        j -= 1;
    }while (j > -1);
  }
  if (carry){
    str = "1" + str;
  }
  return str;
}
addBinary("1010", "1011");