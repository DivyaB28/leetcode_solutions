//Definition for singly-linked list.
//  function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)
//      this.next = (next===undefined ? null : next)
//   }

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;

  while (n) {
    fast = fast.next;
    n--;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};

/**
 * Solution: https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/5418407/video-using-distance-between-two-pointers/
 */
