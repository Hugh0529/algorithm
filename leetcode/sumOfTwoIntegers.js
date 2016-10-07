/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// function one
var getSum1 = function(a, b) {
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

// function two
var getSum2 = function(a, b) {
  if (b === 0) {
    return a;
  }
  var sum = a ^ b,
    carry = (a & b) << 1;
  return getSum(sum, carry);
};
