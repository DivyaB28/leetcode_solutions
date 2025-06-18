'''
Algorithm Explanation: Two Pointers
Because the array is sorted, we can use the two-pointer approach:

 Steps:
Initialize two pointers:

left = 0 (start of array)

right = len(numbers) - 1 (end of array)

While left < right:

Calculate total = numbers[left] + numbers[right]

If total == target: return [left + 1, right + 1] (since it’s 1-indexed)

If total < target: move left pointer to the right

If total > target: move right pointer to the left

This works efficiently in O(n) time.

Time and Space Complexity
Time: O(n) — each pointer moves at most once per element.

Space: O(1) — constant space, no extra structures used.
'''
def twoSum(numbers, target):
    left, right = 0, len(numbers) - 1

    while left < right:
        total = numbers[left] + numbers[right]

        if total == target:
            return [left + 1, right + 1]  # 1-indexed
        elif total < target:
            left += 1
        else:
            right -= 1
