/**
 * @author unicornking-haoran
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
  let result = nums[0]
  for (let i = 1; i < nums.length; i++) {
    local = Math.max(nums[i], local + nums[i])
    result = Math.max(local, result)
  }
  return result
}

console.log(maxSubArray([-3, 1, 3, -2, 3]));