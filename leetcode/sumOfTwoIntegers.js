/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  var carry = 0,
    length = 32,
    result = 0,
    sum = 0,
    i;
  for (i = 0; i < length; i++) {
    sum = ((b >> i) & 1) + ((a >> i) & 1);
    sum += carry;
    carry = sum >= 2 ? 1 : 0;
    sum %= 2;
    result |= (sum << i);
  }

  return result;
};