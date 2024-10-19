var MinStack = function () {
  this.lists = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.lists.push({
    value: val,
    min: this.lists.length === 0 ? val : Math.min(val, this.getMin()),
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.lists.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.lists[this.lists.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.lists[this.lists.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 * problem: https://leetcode.com/problems/min-stack/description/
 */
