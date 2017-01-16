/**
 * @param {number} n
 * @return {number}
 */
function trailingZeroes(n){
   return n === 0 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
}