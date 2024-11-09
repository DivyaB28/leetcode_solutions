/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let number = 0,
    signValue = 1,
    result = 0,
    operationsStack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    if (!isNaN(parseInt(c))) {
      number = number * 10 + parseInt(c);
    } else if (c === "+" || c === "-") {
      result += number * signValue;
      signValue = c === "-" ? -1 : 1;
      number = 0;
    } else if (c === "(") {
      operationsStack.push(result);
      operationsStack.push(signValue);
      result = 0;
      signValue = 1;
    } else if (c === ")") {
      result += signValue * number;
      result *= operationsStack.pop(); // signvalue
      result += operationsStack.pop(); // secondnumber
      number = 0;
    }
  }
  return result + number * signValue;
};

/**
 * Solution video: https://www.youtube.com/watch?v=OavCqdz1HSs
 * https://leetcode.com/problems/basic-calculator/solutions/5898840/simple-solution-with-diagrams-in-video-javascript-c-java-python/
 *
 */
