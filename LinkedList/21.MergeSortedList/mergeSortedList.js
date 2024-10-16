/**
 * Problem: https://leetcode.com/problems/merge-two-sorted-lists/description/
 * SOlution: https://leetcode.com/problems/merge-two-sorted-lists/solutions/5111386/video-using-dummy-pointer-and-recursion-solution-as-a-bonus/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let temp = new ListNode();
  let curr = temp;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      curr.next = list2;
      list2 = list2.next;
    } else {
      curr.next = list1;
      list1 = list1.next;
    }
    curr = curr.next;
  }

  curr.next = list1 || list2;

  return temp.next;
};
