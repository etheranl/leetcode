/**
 * @author etheranl(haoran)
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  let result = []
  nums.some((num, i) => {
    if (map[num] !== undefined) {
      result = [map[num], i]
      return true
    } 
    map[target - num] = i;
    return false
  })
  return result;
};
console.log(twoSum([1, 3, 4], 7));