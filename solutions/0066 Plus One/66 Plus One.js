/**
 * @author unicornking-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/plus-one/description/
*/


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (i = digits.length - 1; i >= 0;) {
    if (digits[i] === 9) {
      if (i == 0) {
        digits[i] = 0
        digits.unshift(1)
        break
      }
      digits[i] = 0
      i--
      continue
    }
    digits[i] += 1
    break
  }
  return digits
};

console.log(plusOne([9, 9, 9, 9]));