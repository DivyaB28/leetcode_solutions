var AllOne = function () {
  this.map = new Map();
  this.preOp = "start";
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  this.map.set(key, this.map.get(key) + 1 || 1);
  this.preOp = "inc";
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  let occ = this.map.get(key);
  occ === 1 ? this.map.delete(key) : this.map.set(key, occ - 1);
  this.preOp = "dec";
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  if (this.preOp !== "max") {
    this.map = new Map([...this.map].sort((x, y) => y[1] - x[1]));
  }
  this.preOp = "max";
  return this.map.keys().next().value || "";
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  if (this.preOp !== "min") {
    this.map = new Map([...this.map].sort((x, y) => x[1] - y[1]));
  }
  this.preOp = "min";
  return this.map.keys().next().value || "";
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

/**
 * Problem: https://leetcode.com/problems/all-oone-data-structure/description/
 */
