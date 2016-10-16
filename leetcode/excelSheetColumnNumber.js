/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var length = s.length,
    result = 0,
    i;

  for (i = length - 1; i >= 0; i--) {
    result += Math.pow(26, length - i -1) * (s.charAt(i).charCodeAt() - 64);
  }

  return result;
};