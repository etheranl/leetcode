/**
 * @author etheranl-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/rotate-array/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let maxn = nums.length
  for (let i = 0; i <= maxn + 1; i++) {
    if (nums.indexOf(i) === -1) {
      return i
    }
  }
};

console.log(missingNumber([0, 1]));
