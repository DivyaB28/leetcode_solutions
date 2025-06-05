# https://leetcode.com/problems/binary-tree-preorder-traversal/description/
# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def preorderTraversal(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: List[int]
        """
        if root is None:
            return []

        return ([root.val] + self.preorderTraversal(root.left) + self.preorderTraversal(root.right))
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
print(sol.preorderTraversal(root))  # Output: [1, 2, 4, 5, 3]
# print(sol.preorderTraversal([1,2,3,4,5,None,8,None,None,6,7,9]))