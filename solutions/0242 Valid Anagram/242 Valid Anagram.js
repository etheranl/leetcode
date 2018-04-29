/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let sArr = s.split(''),
    tArr = t.split(''),
    sMap = {},
    tMap = {};
  if (sArr.length !== tArr.length) return false
  sArr.forEach((letter, index) => {
    if (sMap[letter] === undefined) {
      sMap[letter] = 1
    } else {
      sMap[letter]++
    }
    if (tMap[tArr[index]] === undefined) {
      tMap[tArr[index]] = 1
    } else {
      tMap[tArr[index]]++
    }
  })
  return Object.keys(sMap).every((num) => {
    return sMap[num] === tMap[num];
  })
};

console.log(isAnagram('sbf', 'bsa'));
