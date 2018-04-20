/**
 * @author unicornking-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/container-with-most-water/description/
*/


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0,
    end = height.length - 1,
    area = 0;
  while (start !== end) {
    if (height[start] > height[end]) {
      area = Math.max(area, height[end] * (end - start))
      end--
      continue
    }
    area = Math.max(area, height[start] * (end - start))
    start++
  }
  return area
};

console.log(maxArea([2,1,10,5]));