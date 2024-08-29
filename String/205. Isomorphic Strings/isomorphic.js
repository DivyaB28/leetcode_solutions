/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let mapS = new Map();
  let mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (!mapS.has(charS) && !mapT.has(charT)) {
      mapS.set(charS, charT);
      mapT.set(charT, charS);
    } else if (mapS.get(charS) !== charT || mapT.get(charT) !== charS) {
      return false;
    }
  }
  return true;
};

/**
 * problem: https://leetcode.com/problems/isomorphic-strings/description/
 * solution:https://leetcode.com/problems/isomorphic-strings/solutions/3347810/javascript-100-with-explanation-92-beats-hash-maps/
 */
