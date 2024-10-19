var MyQueue = function () {
  this.lists = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.lists.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.lists.length === 0 ? undefined : this.lists.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.lists.length === 0 ? undefined : this.lists[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.lists.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
