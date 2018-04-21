/**
 * @author unicornking-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/rotate-array/description/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// beats 100%
var rotate = function (nums, k) {
  let len = nums.length;
  let arr = nums.splice(len - k, len - 1)
  nums.unshift(...arr)
};


rotate([1, 2, 3, 4, 5, 6, 7], 3)