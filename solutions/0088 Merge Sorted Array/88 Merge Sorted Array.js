/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let pointer = 0
  nums1.splice(m, nums1.length)
  nums2.forEach((num) => {
    while (num > nums1[pointer]) {
      pointer++
    }
    nums1.splice(pointer, 0, num)
    pointer++
  })
}

merge([0], 0, [1], 1)
