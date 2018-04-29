/**
 * @author etheranl-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map1 = {},
    map2 = {},
    result = [];
  nums1.forEach((num) => {
    if (map1[num] === undefined) {
      map1[num] = 1
    } else {
      map1[num]++
    }
  })
  nums2.forEach((num) => {
    if (map2[num] === undefined) {
      map2[num] = 1
    } else {
      map2[num]++
    }
  })
  Object.keys(map1).forEach((item, index) => {
    while (map1[item] && map2[item]) {
      result.push(+item)
      map1[item]--
      map2[item]--
    }
  })
  return result
};

console.log(intersect([1, 3, 4], [3, 4]));