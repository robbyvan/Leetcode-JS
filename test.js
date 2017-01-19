function groupAnagrams(strs){
  var copy = strs.slice();
  var res = [];
  var myMap = {};
  for (var i = 0; i < copy.length; i++){
    copy[i] = copy[i].split("").sort().join("");
    if (myMap[copy[i]] !== undefined){
      myMap[copy[i]].push(i);
    }else{
      myMap[copy[i]] = [i];
    }
  }
  for (var set in myMap){
    var temp = [];
    while (myMap[set].length > 0){
      var indice = myMap[set].pop();
      temp.push(strs[indice]);
    }
    res.push(temp);
  }
  console.log(res);
  return res;
}
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);