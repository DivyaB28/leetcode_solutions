/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  // let combinedArr = arr1.concat(arr2);
  // let result = {};
  // combinedArr.forEach((obj) => {
  //     if (!result[obj.id]) {
  //         result[obj.id] = { ...obj };
  //     } else {
  //         result[obj.id] = { ...result[obj.id], ...obj };
  //     }
  // });
  // let joinedArr = Object.values(result).sort((a, b) => a.id - b.id);
  // return joinedArr;

  const result = {};
  for (let i = 0; i < arr1.length; i++) {
    result[arr1[i].id] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    if (result[arr2[i].id]) {
      for (const key in arr2[i]) result[arr2[i].id][key] = arr2[i][key];
    } else {
      result[arr2[i].id] = arr2[i];
    }
  }

  return Object.values(result);
};
console.log(
  join(
    [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
    [{ id: 1, b: { c: 84 }, v: [1, 3] }]
  )
);
