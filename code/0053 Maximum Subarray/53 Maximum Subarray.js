/**
 * @author JSMagician-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/maximum-subarray/description/
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums.length) return null
  let local = nums[0]
  let global = nums[0]
  for (let i = 1; i < nums.length; i++) {
    local = Math.max(nums[i], local + nums[i])
    global = Math.max(local, global)
  }
  return global
}

console.log(maxSubArray([-2, 1, -1, 3, -6, 5]));