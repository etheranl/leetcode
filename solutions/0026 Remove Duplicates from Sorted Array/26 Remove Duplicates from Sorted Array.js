/**
 * @author etheranl-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let map = {},
    count = 0;
  nums.forEach((item, index) => {
    if (map[item] === undefined) {
      map[item] = true
      nums[count] = item;
      count++
    }
  })
  return count
}

console.log(removeDuplicates([1,1,3,1]))