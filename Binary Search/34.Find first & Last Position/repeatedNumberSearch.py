class Solution(object):

    def binary_search(self, low, high, condition):
        while low <= high:
            mid = (low + high) // 2
            result = condition(mid)

            if result == 'found':
                return mid
            elif result == 'left':
                high = mid -1
            else:
                low = mid + 1
        return -1
    
    def firstPosition(self,nums, target):
        def condition(mid):
            if nums[mid] == target:
                if mid > 0 and nums[mid - 1] == target:
                    return 'left'
                return 'found'
            elif nums[mid] < target:
                return 'right'
            else:
                return 'left'
        return self.binary_search(0, len(nums)-1, condition)

    def lastPosition(self, nums, target):
        def condition(mid):
            if nums[mid] == target:
                if mid < len(nums) - 1 and nums[mid + 1] == target:
                    return 'right'
                return 'found'
            elif nums[mid] < target:
                return 'right'
            else:
                return 'left'
        return self.binary_search(0, len(nums)-1, condition)

    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        return self.firstPosition(nums, target), self.lastPosition(nums, target)
    
# Example usage:
sol = Solution()
print(sol.searchRange([5,7,7,8,8,10], 8))  # Output: (3, 4)
print(sol.searchRange([5,7,7,8,8,10], 6))  # Output: (-1, -1)
print(sol.searchRange([], 0))              # Output: (-1, -1)
