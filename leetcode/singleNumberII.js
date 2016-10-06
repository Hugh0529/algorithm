/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var result = 0,
    length = nums.length,
    sum = 0,
    i,
    j;
  for (i = 0; i < 32; i++) {
    for (j = 0; j < length; j++) {
      if (((nums[j] >> i) & 1) === 1) {
        sum += 1;
        sum %= 3;
      }
    }
    if (sum !== 0) {
      result |= (sum << i);
    }
  }

  return result;
};

var foo = [1];
console.log(singleNumber(foo));