const resolves = (a, b, operator) => {
  if (operator === "+") return a + b;
  else if (operator === "-") return a - b;
  else if (operator === "*") return a * b;
  return Math.trunc(a / b);
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
// RPN Reverse Polish Notation.
var evalRPN = function (tokens) {
  const stack = [];

  for (const token of tokens) {
    if (token.length === 1 && token.charCodeAt(0) < 48) {
      const integer2 = stack.pop();
      const integer1 = stack.pop();
      const operator = token;
      const resolvedAns = resolves(integer1, integer2, operator);
      stack.push(resolvedAns);
    } else {
      stack.push(parseInt(token, 10));
    }
  }
  return stack.pop();
};

/**
 * Problem: https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 * Solution: https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/4646163/beats-98-68-users-c-java-python-javascript-explained/
 */
