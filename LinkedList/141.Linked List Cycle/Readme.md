141. Linked List Cycle
     Solved
     Easy
     Topics
     Companies
     Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

Follow up: Can you solve it using O(1) (i.e. constant) memory?

## Solution Explanation:

The hasLoop() function is used to detect if a linked list contains a loop (cycle) or not.

It also utilizes the "tortoise and hare" algorithm.

Here's a step-by-step explanation of the logic:

Initialize two pointers, slow and fast, both pointing to the head of the linked list.

Traverse the linked list using a while loop. The loop continues as long as fast is not null (i.e., it has not reached the end of the list), and fast.next is also not null (i.e., there is at least one more node after the current fast node).

Inside the loop, move the slow pointer one step forward (i.e., slow = slow.next) and the fast pointer two steps forward (i.e., fast = fast.next.next).

Check if the slow and fast pointers have become equal. If they have, it means there is a loop in the linked list, and the function returns true.

If the loop terminates without the slow and fast pointers becoming equal, it means the linked list has no loop, and the function returns false.

The "tortoise and hare" algorithm works by having two pointers move at different speeds through the linked list. If there is a loop, the faster pointer (the hare) will eventually catch up to the slower pointer (the tortoise) inside the loop. If there is no loop, the faster pointer will reach the end of the list.
