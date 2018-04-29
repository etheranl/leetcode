/**
 * @author etheranl-haoran
 * @email imhaoran.wang@foxmail.com
 * @desc see:https://leetcode.com/problems/merge-two-sorted-lists/description/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let newList = new ListNode(Math.min(l2.val, l1.val))
  while (l2.val < l1.val) {
    newList.next = 
  }
};

mergeTwoLists({ val: 1, next: { val: 2, next: { val: 3 } } }, { val: 2, next: { val: 3, next: { val: 4 } } })

function ListNode(val) {
  this.val = val;
  this.next = null;
}