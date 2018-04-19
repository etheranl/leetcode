// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let result = null,
    add = 0,
    p1 = l1,
    p2 = l2,
    pointer = null,
    node = null
  while (p1 || p2) {
    let p1Val = 0, p2Val = 0, val = 0;
    if (p1) {
      p1Val = p1.val
      p1 = p1.next
    }
    if (p2) {
      p2Val = p2.val
      p2 = p2.next
    }
    val = p1Val + p2Val + add
    add = ~~(val / 10)
    node = new ListNode(add ? (val - add * 10) : val);
    pointer ? pointer.next = node : result = node
    pointer = node
  }
  if (add) {
    pointer.next = new ListNode(add)
  }
  return result
};