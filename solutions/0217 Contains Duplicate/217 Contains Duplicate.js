/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set(nums)
  return nums.length !== set.size
};

containsDuplicate([1, 3, 4, 1])