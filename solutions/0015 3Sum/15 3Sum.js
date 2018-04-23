/**
 * @author unicornking-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/3sum/description/
*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    let target = -nums[i],
      start = i + 1,
      end = nums.length - 1,
      mark = false
    while (start !== end) {
      let count = start + end
      if (mark) break;
      switch (true) {
        case count > target:
          end--
          break;
        case count < target:
          start++
          break;
        default:
          mark = true
          result.push([nums[i], start, end])
          break;
      }
    }
  }
  console.log(result);
  return result
};


threeSum([-1, 0, 1, 2, -1, -4, 2, -5, 4])