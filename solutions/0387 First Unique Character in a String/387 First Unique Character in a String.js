/**
 * @author etheranl-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/first-unique-character-in-a-string/description/
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let item = s[i];
    if (s.lastIndexOf(item) === s.indexOf(item)){
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar('leetcode'));