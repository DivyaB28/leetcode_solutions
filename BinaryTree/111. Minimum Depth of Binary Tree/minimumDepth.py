#111. Minimum Depth of Binary Tree
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def minDepth(self, root: TreeNode) -> int:
        """
        :type root: Optional[TreeNode]
        :rtype: int
        """
        if root is None:
            return 0
        
        if root.left is None and root.right is None:
            return 1
        
        if root.left is None:
            return 1 + self.minDepth(root.right)
        
        if root.right is None:
            return 1 + self.minDepth(root.left)
        
        return 1 + min(self.minDepth(root.left), self.minDepth(root.right))


# create a function to find minimum depth of binary tree using queue
from collections import deque
class SolutionQueue:
    def minDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        
        queue = deque([(root, 1)])  # (node, depth)
        
        while queue:
            node, depth = queue.popleft()
            
            # If we reach a leaf node
            if not node.left and not node.right:
                return depth
            
            if node.left:
                queue.append((node.left, depth + 1))
            if node.right:
                queue.append((node.right, depth + 1))