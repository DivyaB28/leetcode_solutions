# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    def deleteDuplicates(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        current = head

        while current and current.next:
            if current.val == current.next.val:
                current.next = current.next.next
            else:
                current = current.next
                
        return head
             

# Example usage:
# Create a linked list: 1 -> 1 -> 2 -> 3 -> 3
head = ListNode(1, ListNode(1, ListNode(2, ListNode(3, ListNode(3)))))
sol = Solution()
result = sol.deleteDuplicates(head)
# Print the resulting linked list
while result:
    print(result.val, end=" -> ")
    result = result.next
print("None")  # Output: 1 -> 2 -> 3 -> None