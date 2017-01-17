/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, dict){
  var sets = [];
  if (!s.length || !dict.length){
    return false;
  }
  sets[0] = true;
  for (var i = 1; i <= s.length; i++){
    for (var j = 0; j < i; j++){
      if (sets[j] && dict.indexOf(s.substring(j, i)) !== -1){
        sets[i] = true;
        break;
      }
    }
  }
  return sets[s.length];
}
wordBreak("a", ["a"]);