/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  var length = s.length,
    i = 1,
    current = s.charAt(0),
    first = 1,
    second = 1,
    prev;

  if (length === 0 || current === '0') {
    return 0;
  }

  for (i; i < length; i++) {
    prev = current;
    current = s.charAt(i);

    if (current !== '0') {
      if (prev === '1' || (prev === '2' && current <= '6')) {
        second = first + second;
        first = second - first;
      } else {
        first = second;
      }
    } else if (prev === '1' || prev === '2') {
      second = first;
    } else {
      return 0;
    }
  }
  return second;
};
numDecodings('110');