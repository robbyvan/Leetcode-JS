/*利用map, 检测重复, 如果之前出现时暂停本轮计数, 需要注意currhead和map[char]+1的关系, 防止'abba'情况*/
function lengthOfLongestSubstring(str){
  var map = {};
  var currLen = 0;
  var maxLen = 0;
  var currHead = 0;

  for (var i = 0; i < str.length; i++){
    var char = str.charAt(i);
    if (map[char] !== undefined){
      currHead = Math.max(map[char] + 1, currHead);
      currLen = i - currHead;
    }
    currLen += 1;
    if (currLen > maxLen){
      maxLen = currLen;
    }
    map[char] = i;
  }
  return maxLen;
}
