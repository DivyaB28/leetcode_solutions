# https://leetcode.com/problems/binary-tree-postorder-traversal/description/
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def postorderTraversal(self, root: TreeNode) -> list[int]:
        """
        :type root: Optional[TreeNode]
        :rtype: List[int]
        """
        if root is None:
            return []
        
        return (self.postorderTraversal(root.left) + self.postorderTraversal(root.right) + [root.val])
# Example usage:
# Create a binary tree
#       1
#      / \
#     2   3
#    /
#   4
#   5
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
sol = Solution()
print(sol.postorderTraversal(root))  # Output: [4, 5, 2, 3, 1]