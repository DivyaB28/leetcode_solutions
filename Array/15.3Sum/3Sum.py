'''


Approach to Solve:
One efficient way to solve the problem is by using sorting and a two-pointer technique:

Sort the array: This helps in skipping duplicates and simplifies the process of finding triplets.
Fix one element and use two pointers: For each element in the sorted array (as the fixed element), use two pointers (left and right) to find the other two numbers that sum to zero along with the fixed element.
Skip duplicates: Both for the fixed element and for the left and right pointers.
Algorithm:
Sort nums.
Iterate over nums with index i:
If nums[i] is greater than zero, break (as all further elements will also be positive).
Skip duplicates for i.
Initialize two pointers: left = i + 1 and right = nums.length - 1.
While left < right:
Check the sum of nums[i], nums[left], and nums[right].
If the sum is zero, add the triplet to the result and move left and right to the next non-duplicate values.
If the sum is less than zero, move left up.
If the sum is greater than zero, move right down.
Time Complexity:
Sorting the array: 
O
(
N
log
⁡
N
)
O(NlogN).
Two-pointer operation for each element: 
O
(
N
2
)
O(N 
2
 ).
Overall: 
O
(
N
2
)
O(N 
2
 ).
Space Complexity:
O
(
1
)
O(1) additional space (ignoring the result list).

'''

def threeSum(nums):
    nums.sort()  # Sort the array first
    result = []
    n = len(nums)
    
    for i in range(n):
        # Skip duplicates for the fixed element
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        
        # Two-pointer approach
        left, right = i + 1, n - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                
                # Skip duplicates for left and right pointers
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1
            
            elif total < 0:
                left += 1  # Increase the sum
            else:
                right -= 1  # Decrease the sum
                
    return result