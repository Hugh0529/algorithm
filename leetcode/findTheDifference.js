/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  var sASCII = 0,
    tASCII = 0,
    i;

  for (i = s.length - 1; i >= 0; i--) {
    sASCII += s.charAt(i).charCodeAt();
  }

  for (i = t.length - 1; i >= 0; i--) {
    tASCII += t.charAt(i).charCodeAt();
  }

  return String.fromCharCode(tASCII - sASCII);
};