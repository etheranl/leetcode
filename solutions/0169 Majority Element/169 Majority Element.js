/**
 * @author etheranl-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc https://leetcode.com/problems/majority-element/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */


// solution one
// var majorityElement = function (nums) {
//   nums.sort();
//   return nums[~~(nums.length / 2)];
// };

// solution two
var majorityElement = function (nums) {
  let map = {},
    result = 0,
    len = nums.length / 2;
  nums.some((num) => {
    if (map[num] === undefined) {
      map[num] = 1
    } else {
      map[num]++
    }
    if (map[num] > len) {
      result = num
      return true
    }
    return false
  })
  return result
};


majorityElement([1, 2, 3, 4, 2, 3, 3])