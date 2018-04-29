/**
 * @author etheranl-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/pascals-triangle/description/
*/

// [
//   [1],
//  [1,1],
// [1,2,1],
// [1,3,3,1],
// [1,4,6,4,1]
// ]


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [[1]]
  if (numRows === 0) {   // 如果输入0则直接返回[]
    return []
  }
  for (let i = 1; i < numRows; i++) {
    let curArr = [1]       // 初始化当前项数组
    for (let j = 1; j <= i; j++) {
      if (j > i / 2) {     // 对称
        curArr.push(curArr[i - j])
      } else {
        curArr.push(result[i - 1][j - 1] + result[i - 1][j])  // 计算第j项，为上一个数组的[j - 1]和j项之和
      }
    }
    result.push(curArr)
  }
  return result
};

generate(5)