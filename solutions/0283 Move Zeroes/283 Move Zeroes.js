/**
 * @author etheranl-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/move-zeroes/description/
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeros = [];
  for (let i = 0; i < nums.length;) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      zeros.push(0)
      continue
    }
    i++ 
  }
  nums.splice(nums.length, 0, ...zeros)
};


moveZeroes([0, 0, 1])
