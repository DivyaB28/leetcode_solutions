'''
Problem Recap
Goal: Given an integer array nums and an integer target, find three numbers in nums such that their sum is closest to target.

Output: Return the sum itself, not the triplet. The problem guarantees a unique optimal sum.

🔍 Optimal Approach: Sort + Two Pointers
1. Sort the array
Sorting allows controlled pointer movement based on increasing/decreasing sums. 
youtube.com
+11
youtube.com
+11
youtube.com
+11
youtube.com
+1
youtube.com
+1

2. Initialize closest sum
Set closest_sum = nums[0] + nums[1] + nums[2]—a guaranteed valid starting sum.

3. Iterate with fixed element + two-pointer scan
python
Copy
Edit
for i in range(n - 2):
    left, right = i + 1, n - 1
    while left < right:
        cur = nums[i] + nums[left] + nums[right]

        if abs(cur - target) < abs(closest_sum - target):
            closest_sum = cur

        if cur == target:
            return cur  # perfect match
        elif cur < target:
            left += 1  # increase sum
        else:
            right -= 1  # decrease sum
Why it works:

Sorted array means we can adjust left/right to move closer to target efficiently.

Each i leads to an O(n) scan, so overall is O(n²).

⏱ Performance
Time Complexity: Sorting is O(n log n), plus O(n²) for the main loops → O(n²) overall

Space Complexity: In-place sorting → O(1) extra space

'''
def threeSumClosest(nums, target):
    nums.sort()
    closest = nums[0] + nums[1] + nums[2]
    n = len(nums)

    for i in range(n - 2):
        l, r = i + 1, n - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if abs(s - target) < abs(closest - target):
                closest = s
            if s == target:
                return s
            elif s < target:
                l += 1
            else:
                r -= 1

    return closest
