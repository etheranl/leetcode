/**
 * @author etheranl-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/count-primes/description/
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let map = new Array(n)
    , a = Math.sqrt(n);
  let result = 0;
  for (let i = 2; i <= a; i++) {
    if (!map[i]) {
      for (var j = i * i; j < n; j += i) {
        map[j] = true;
      }
    }
  }
  for (let i = 2; i < n; i++) {
    if (!map[i]) result++;
  }
  return result;
};

console.log(countPrimes(19));
