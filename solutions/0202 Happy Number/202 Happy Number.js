/**
 * @author etheranl-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/happy-number/description/
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let number = n
  let map = {}
  while (!map[number]) {
    let arr = (number + '').split('')
    if (number == 1) return true
    map[number] = true
    number = 0;
    arr.forEach((num) => {
      number += num * num
    })
  }
  return false
};

console.log(isHappy(19));


