## 876. Middle of the Linked List

     Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100

## Solution explanation:

LL: Find Middle Node ( \*\* Interview Question)
Implement a member function called findMiddleNode() that finds and returns the middle node of the linked list.

Note: this LinkedList implementation does not have a length member variable.

Output:

Return the middle node of the linked list.

If the list has an even number of nodes, return the second middle node (the one closer to the end).

Constraints:

You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

You can only traverse the linked list once.

Example 1:

Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5

After calling the findMiddleNode() function:

let middle = list.findMiddleNode();
The middle node should have the value 3.

Example 2:

Now suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5 -> 6

After calling the findMiddleNode() function:

let middle = list.findMiddleNode();
The middle node should have the value 4.
