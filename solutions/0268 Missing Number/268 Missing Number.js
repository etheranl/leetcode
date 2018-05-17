/**
 * @author etheranl-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/missing-number/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  return nums.length * (nums.length + 1) / 2 - nums.reduce((realTotal,sum)=> realTotal += sum)
}

console.log(missingNumber([0, 2]));
