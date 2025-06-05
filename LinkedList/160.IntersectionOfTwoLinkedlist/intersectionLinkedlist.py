# Definition for singly-linked list node
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        if not headA or not headB:
            return None

        # Two pointers for traversing both lists
        pA = headA
        pB = headB

        # Loop until they meet or both become None
        while pA != pB:
            # If pA reaches the end of list A, switch to headB
            pA = pA.next if pA else headB
            # If pB reaches the end of list B, switch to headA
            pB = pB.next if pB else headA

        # If there's an intersection, both pointers meet at the node
        # If not, both become None
        return pA
# Example usage:
# Create two linked lists that intersectList A: 1 -> 2 -> 3
# List B: 6 -> 7
# Intersecting node: 3
# Intersecting node: 3
# List A: 1 -> 2 -> 3
# List B: 6 -> 7
# Intersecting node: 3
node = ListNode(3)
headA = ListNode(1, ListNode(2, node))
headB = ListNode(6, ListNode(7, node))
sol = Solution()
print(sol.getIntersectionNode(headA, headB).val)  # Output: 3