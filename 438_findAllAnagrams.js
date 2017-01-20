function findAnagrams(s, p){
  if (!s || !p || p.length > s.length){
    return [];
  }

  var hash = {};
  for (var i = 0; i < p.length; ++i){
    if (hash[p.charAt(i)]){
      hash[p.charAt(i)]++;
    }else{
      hash[p.charAt(i)] = 1;
    }
  }
  var count = p.length;
  var low = 0, high = 0;
  var res = [];
  while(high < s.length){
    if (hash[s.charAt(high)] !== undefined && hash[s.charAt(high)] > 0){
      hash[s.charAt(high)] -= 1;
      count -= 1;
      high += 1;
    }else if (hash[s.charAt(high)] !== undefined && hash[s.charAt(high)] === 0){
      hash[s.charAt(low)] += 1;
      count += 1;
      low += 1;
    }else if (hash[s.charAt(high)] === undefined){
      while (low < high){
        if (hash[s.charAt(low)] !== undefined){
          hash[s.charAt(low)] += 1;
          count += 1;
        }
        low += 1;
      }
      low = ++high;
    }
    if (count === 0){
      res.push(low);
    }
  }
  return res;
}
var a = findAnagrams("abacab", "ba");
console.log(a);