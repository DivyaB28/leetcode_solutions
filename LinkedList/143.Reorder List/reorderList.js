/**
 * Problem:  https://leetcode.com/problems/reorder-list/description/
 * solution:
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) {
    return;
  }

  let slow = head;
  let fast = head;
  // find the mid node
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse second half
  let prev = null;
  let curr = slow.next;
  slow.next = null; // seperate second half

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // merge 2 halves alternatively

  let first = head;
  let second = prev;
  while (second) {
    let next1 = first.next;
    let next2 = second.next;
    first.next = second;
    second.next = next1;
    first = next1;
    second = next2;
  }
};
