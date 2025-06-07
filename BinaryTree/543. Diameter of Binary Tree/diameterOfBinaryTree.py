# 543. Diameter of Binary Tree
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        """
        :type root: Optional[TreeNode]
        :rtype: int
        """
        self.diameter = 0
        
        def depth(node):
            if not node:
                return 0
            
            left_depth = depth(node.left)
            right_depth = depth(node.right)
            
            # Update the diameter at this node
            self.diameter = max(self.diameter, left_depth + right_depth)
            
            # Return the depth of the tree rooted at this node
            return 1 + max(left_depth, right_depth)
        
        depth(root)
        return self.diameter
    
# Example usage:
# Create a binary tree
#       1
#      / \
#     2   3
#    / \
#   4   5
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
sol = Solution()
print(sol.diameterOfBinaryTree(root))  # Output: 3
# Output: 3, as the longest path is 4 -> 2 -> 1 -> 3 or 5 -> 2 -> 1 -> 3
# The longest path is between nodes 4 and 3 or between nodes 5 and 3, which has a length of 3.