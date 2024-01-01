/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let obj = {};
  this.forEach((item) => {
    let key = fn(item);
    if (obj.hasOwnProperty(key)) obj[key].push(item);
    else obj[key] = [item];
  });
  return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
