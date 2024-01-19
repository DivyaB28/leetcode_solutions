/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "X++" || operations[i] === "++X") x++;
    else x--;
  }
  return x;
};

/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = (operations) => {
  let counter = 0;
  operations.forEach((operation) =>
    operation.includes("++") ? counter++ : counter--
  );
  return counter;
};
