/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  var result = '';
  var i = s.length - 1;

  if(!s) {
    return s;
  }

  for(i; i >= 0; i--) {
    result += s.charAt(i);
  }

  return result;
};
