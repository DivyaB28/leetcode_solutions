class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        low, high = 0, len(nums)-1
        while low <= high:
            mid = (low + high) // 2
            mid_number = nums[mid]

            if mid_number == target:
                return mid
            
            if nums[low] <= mid_number:

                if nums[low] <= target < mid_number:
                    high = mid - 1
                else:
                    low = mid + 1
            else:
                if mid_number < target <= nums[high]:
                    low = mid + 1
                else:
                    high = mid - 1

        return -1


# Example usage:
sol = Solution()
print(sol.search([4,5,6,7,0,1,2], 0))  # Output: 4
print(sol.search([4,5,6,7,0,1,2], 3))  # Output: -1
print(sol.search([1], 0))              # Output: -1
print(sol.search([1,3], 3))            # Output: 1
print(sol.search([1,3], 1))            # Output: 0
print(sol.search([1,3], 2))            # Output: -1
print(sol.search([1,3,5], 5))          # Output: 2