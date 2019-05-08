/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let left = -1;
    let right = nums.length;
    let i = 0;
    while (i < right) {
        switch (nums[i]) {
            case 0:
                swap(nums, i++, ++left)
                break;
            case 1:
                i++;
                break;
            default:
                swap(nums, i, --right)
                break;
        }
    }
};

function swap(arr, p1, p2) {
    let temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
}