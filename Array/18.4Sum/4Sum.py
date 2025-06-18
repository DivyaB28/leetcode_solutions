'''
Algorithm Explanation
We extend the Two Pointers + Sorting strategy used in 3Sum.

Steps:
Sort the array to simplify duplicate handling and two-pointer logic.

Use two nested loops to fix the first two numbers a and b.

Use two pointers (left, right) to find valid c and d:

Move left forward if the sum is too small.

Move right backward if the sum is too large.

Record the result when the sum matches the target.

Skip duplicates at each step to avoid repeated quadruplets.

Time Complexity
Time: O(n^3)

First two loops: O(n^2)

Two-pointer scan inside: O(n)

Space: O(1) (not counting output)
'''
def fourSum(nums, target):
    nums.sort()
    n = len(nums)
    res = []

    for i in range(n - 3):
        # Skip duplicates for i
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        for j in range(i + 1, n - 2):
            # Skip duplicates for j
            if j > i + 1 and nums[j] == nums[j - 1]:
                continue

            left = j + 1
            right = n - 1

            while left < right:
                total = nums[i] + nums[j] + nums[left] + nums[right]

                if total == target:
                    res.append([nums[i], nums[j], nums[left], nums[right]])

                    # Skip duplicates for left and right
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1

                    left += 1
                    right -= 1

                elif total < target:
                    left += 1
                else:
                    right -= 1

    return res

