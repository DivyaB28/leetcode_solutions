var diffWaysToCompute = function (expression) {
  // Base case: if the expression is just a number, return it as a single result
  if (
    !expression.includes("+") &&
    !expression.includes("-") &&
    !expression.includes("*")
  ) {
    return [parseInt(expression)];
  }

  let result = [];

  // Iterate over each character in the expression
  for (let i = 0; i < expression.length; i++) {
    let char = expression[i];

    // If the character is an operator, split the expression
    if (char === "+" || char === "-" || char === "*") {
      // Recursively solve the left and right parts of the expression
      let leftResults = diffWaysToCompute(expression.substring(0, i));
      let rightResults = diffWaysToCompute(expression.substring(i + 1));

      // Combine the results from left and right sub-expressions using the current operator
      for (let left of leftResults) {
        for (let right of rightResults) {
          let computed;
          if (char === "+") {
            computed = left + right;
          } else if (char === "-") {
            computed = left - right;
          } else if (char === "*") {
            computed = left * right;
          }
          result.push(computed); // Store the result
        }
      }
    }
  }

  return result; // Return all possible outcomes
};

/**
 * Problem: https://leetcode.com/problems/different-ways-to-add-parentheses/description/
 *
 * Solution: https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5806466/recursion-with-comments-and-detail-explain/
 */
