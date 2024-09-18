var frequencySort = function (s) {
  const counter = new Map();
  for (const c of s) {
    counter.set(c, (counter.get(c) || 0) + 1);
  }
  const pq = Array.from(counter.entries());
  pq.sort((a, b) => b[1] - a[1]);

  let result = "";

  for (const [char, freq] of pq) {
    result += char.repeat(freq);
  }
};

/**
 * Problem: https://leetcode.com/problems/sort-characters-by-frequency/description/
 * Solution: https://leetcode.com/problems/sort-characters-by-frequency/solutions/4689154/beats-100-users-c-java-python-javascript-2-approaches-explained/
 */
