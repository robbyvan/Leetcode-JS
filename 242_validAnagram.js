var isAnagram = function(s, t) {
    var ss = s.split("").sort().join("");
    var ts = t.split("").sort().join("");
    return (ss === ts);
};